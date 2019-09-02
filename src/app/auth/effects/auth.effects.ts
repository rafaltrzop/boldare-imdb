import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import {
  catchError,
  concatMap,
  exhaustMap,
  map,
  tap,
  withLatestFrom
} from 'rxjs/operators';
import { of } from 'rxjs';

import { AuthService } from '@app/auth/services';
import { AuthApiActions, LoginPageActions } from '@app/auth/actions';
import { Credentials } from '@app/auth/models';
import * as fromAuth from '@app/auth/reducers';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginPageActions.login),
      map(action => action.credentials),
      exhaustMap((credentials: Credentials) =>
        this.authService.login(credentials).pipe(
          map(token => AuthApiActions.loginSuccess(token)),
          catchError(({ error }) => of(AuthApiActions.loginFailure(error)))
        )
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthApiActions.loginSuccess),
        concatMap(action =>
          of(action).pipe(
            withLatestFrom(this.store.pipe(select(fromAuth.getToken)))
          )
        ),
        tap(([action, token]) => {
          localStorage.setItem('token', token);
          // this.router.navigate(['/']); // TODO
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<fromAuth.State>
  ) {}
}
