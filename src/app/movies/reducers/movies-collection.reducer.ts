import { createReducer, on } from '@ngrx/store';

import {
  MoviesCollectionApiActions,
  MoviesCollectionPageActions
} from '@app/movies/actions';
import { Movie } from '@app/movies/models';

export const moviesFeatureKey = 'movies';

export interface State {
  collection: Movie[];
  total: number;
  isLoading: boolean;
}

export const initialState: State = {
  collection: [],
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
    (state, { collection, total }) => ({
      ...state,
      collection,
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

export const getCollection = (state: State) => state.collection;
export const getTotal = (state: State) => state.total;
export const getIsLoading = (state: State) => state.isLoading;
