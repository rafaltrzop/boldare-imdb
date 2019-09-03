import { createAction, props } from '@ngrx/store';

import { Credentials } from '@app/auth/models';

export const login = createAction(
  '[Auth] Login',
  props<{ credentials: Credentials }>()
);

export const loginPageRedirect = createAction('[Auth] Login Page Redirect');

export const logout = createAction('[Auth] Logout');

export const homePageRedirect = createAction('[Auth] Home Page Redirect');
