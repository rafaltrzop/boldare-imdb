import { props, createAction } from '@ngrx/store';

import { Token } from '@app/auth/models';
import { ApiError } from '@app/core/models';

export const loginSuccess = createAction(
  '[Auth API] Login Success',
  props<Token>()
);

export const loginFailure = createAction(
  '[Auth API] Login Failure',
  props<ApiError>()
);
