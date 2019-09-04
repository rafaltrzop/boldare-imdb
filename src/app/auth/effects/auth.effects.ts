import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import {
  catchError,
  concatMap,
  exhaustMap,
  first,
  map,
  tap,
  withLatestFrom
} from 'rxjs/operators';

import { AuthService } from '@app/auth/services';
import { AuthActions, AuthApiActions } from '@app/auth/actions';
import { Credentials } from '@app/auth/models';
import * as fromAuth from '@app/auth/reducers';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      map(action => action.credentials),
      exhaustMap((credentials: Credentials) =>
        this.authService.login(credentials).pipe(
          first(),
          map(token => AuthApiActions.loginSuccess(token)),
          catchError(({ error }) => of(AuthApiActions.loginFailure(error)))
        )
      )
    )
  );

  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthApiActions.loginSuccess),
      concatMap(action =>
        of(action).pipe(
          withLatestFrom(this.store.pipe(select(fromAuth.getToken)))
        )
      ),
      tap(([, token]) => {
        localStorage.setItem('token', token);
      }),
      map(() => AuthActions.homePageRedirect())
    )
  );

  loginPageRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginPageRedirect, AuthActions.logout),
        tap(() => {
          this.router.navigate(['/login']);
        })
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => {
          localStorage.removeItem('token');
        })
      ),
    { dispatch: false }
  );

  homePageRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.homePageRedirect),
        tap(() => {
          this.router.navigate(['/']);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<fromAuth.State>,
    private router: Router
  ) {}
}
