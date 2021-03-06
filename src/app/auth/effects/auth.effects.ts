import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, first, map, tap } from 'rxjs/operators';

import { AuthService } from '@app/auth/services';
import {
  AuthActions,
  AuthApiActions,
  AuthGuardActions,
  LoginPageActions
} from '@app/auth/actions';
import { MovieExistsGuardActions } from '@app/movies/actions';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginPageActions.login),
      map(action => action.credentials),
      exhaustMap(credentials =>
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
      map(action => action.token),
      tap(token => {
        localStorage.setItem('token', token);
      }),
      map(() => LoginPageActions.homePageRedirect())
    )
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
        ofType(
          AuthGuardActions.homePageRedirect,
          LoginPageActions.homePageRedirect
        ),
        tap(() => {
          this.router.navigateByUrl('/');
        })
      ),
    { dispatch: false }
  );

  loginPageRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthGuardActions.loginPageRedirect, AuthActions.logout),
        tap(() => {
          this.router.navigateByUrl('/login');
        })
      ),
    { dispatch: false }
  );

  notFoundPageRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(MovieExistsGuardActions.notFoundPageRedirect),
        tap(() => {
          this.router.navigateByUrl('/404');
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
