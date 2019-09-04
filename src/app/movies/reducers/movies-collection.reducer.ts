import { createReducer, on } from '@ngrx/store';

import { MoviesCollectionApiActions } from '@app/movies/actions';

export const collectionFeatureKey = 'collection';

export interface State {
  movies: any[]; // TODO: Movie[] type
  total: number;
}

export const initialState: State = {
  movies: [],
  total: 0
};

export const reducer = createReducer(
  initialState,
  on(
    MoviesCollectionApiActions.loadMoviesSuccess,
    (state, { movies, total }) => ({
      ...state,
      movies,
      total
    })
  )
);

export const getMovies = (state: State) => state.movies;
