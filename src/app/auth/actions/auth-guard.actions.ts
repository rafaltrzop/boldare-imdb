import { createAction } from '@ngrx/store';

export const loginPageRedirect = createAction(
  '[Auth Guard] Login Page Redirect'
);

export const homePageRedirect = createAction('[Auth Guard] Home Page Redirect');
