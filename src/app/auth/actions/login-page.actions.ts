import { createAction, props } from '@ngrx/store';

import { Credentials } from '@app/auth/models';

export const login = createAction(
  '[Login Page] Login',
  props<{ credentials: Credentials }>()
);

export const homePageRedirect = createAction('[Login Page] Home Page Redirect');
