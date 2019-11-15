import { createAction, props } from '@ngrx/store';

import { MoviesParams } from '@app/movies/models';

export const loadMovies = createAction(
  '[Movies Collection Page] Load Movies',
  props<{ params: MoviesParams }>()
);
