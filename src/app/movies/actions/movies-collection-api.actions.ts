import { createAction, props } from '@ngrx/store';

import { ApiError } from '@app/core/models';

export const loadMoviesSuccess = createAction(
  '[Movies Collection API] Load Movies Success',
  props<{ movies: any[]; total: number }>() // TODO: Movie[] type
);

export const loadMoviesFailure = createAction(
  '[Movies Collection API] Load Movies Failure',
  props<{ error: ApiError }>()
);
