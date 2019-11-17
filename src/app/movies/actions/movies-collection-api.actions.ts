import { createAction, props } from '@ngrx/store';

import { ApiError, Collection } from '@app/core/models';
import { Movie } from '@app/movies/models';

export const loadMovieSuccess = createAction(
  '[Movies Collection API] Load Movie Success',
  props<{ movie: Movie }>()
);

export const loadMovieFailure = createAction(
  '[Movies Collection API] Load Movie Failure',
  props<{ error: ApiError }>()
);

export const loadMoviesSuccess = createAction(
  '[Movies Collection API] Load Movies Success',
  props<Collection<Movie>>()
);

export const loadMoviesFailure = createAction(
  '[Movies Collection API] Load Movies Failure',
  props<{ error: ApiError }>()
);
