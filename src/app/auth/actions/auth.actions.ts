import { createAction, props } from '@ngrx/store';

import { Credentials } from '@app/auth/models';

export const login = createAction(
  '[Auth] Login',
  props<{ credentials: Credentials }>()
);

export const loginRedirect = createAction('[Auth] Login Redirect');

export const logout = createAction('[Auth] Logout');
