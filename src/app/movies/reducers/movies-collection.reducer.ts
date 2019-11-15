import { createReducer, on } from '@ngrx/store';

import {
  MoviesCollectionApiActions,
  MoviesCollectionPageActions
} from '@app/movies/actions';
import { Movie } from '@app/movies/models';

export const collectionFeatureKey = 'collection';

export interface State {
  movies: Movie[];
  total: number;
  isLoading: boolean;
}

export const initialState: State = {
  movies: [],
  total: 0,
  isLoading: false
};

export const reducer = createReducer(
  initialState,
  on(MoviesCollectionPageActions.loadMovies, state => ({
    ...state,
    isLoading: true
  })),
  on(
    MoviesCollectionApiActions.loadMoviesSuccess,
    (state, { movies, total }) => ({
      ...state,
      movies,
      total,
      isLoading: false
    })
  ),
  // TODO: use error?
  on(MoviesCollectionApiActions.loadMoviesFailure, (state, { error }) => ({
    ...state,
    isLoading: false
  }))
);

export const getMovies = (state: State) => state.movies;
export const getTotal = (state: State) => state.total;
export const getIsLoading = (state: State) => state.isLoading;
