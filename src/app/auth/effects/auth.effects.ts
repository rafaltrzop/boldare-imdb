import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

import { AuthService } from '@app/auth/services';
import { AuthApiActions, LoginPageActions } from '@app/auth/actions';
import { Credentials } from '@app/auth/models';

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

  constructor(private actions$: Actions, private authService: AuthService) {}
}
