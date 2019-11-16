import { createReducer, on } from '@ngrx/store';

import {
  MoviesCollectionApiActions,
  MoviesCollectionPageActions
} from '@app/movies/actions';

export const searchResultsFeatureKey = 'searchResults';

export interface State {
  ids: string[];
  total: number;
  loading: boolean;
}

export const initialState: State = {
  ids: [],
  total: 0,
  loading: false
};

export const reducer = createReducer(
  initialState,
  on(MoviesCollectionPageActions.loadMovies, state => ({
    ...state,
    loading: true
  })),
  on(
    MoviesCollectionApiActions.loadMoviesSuccess,
    (state, { collection, total }) => ({
      ...state,
      ids: collection.map(movie => movie.imdbId),
      total,
      loading: false
    })
  ),
  on(MoviesCollectionApiActions.loadMoviesFailure, (state, { error }) => ({
    ...state,
    loading: false
  }))
);

export const getIds = (state: State) => state.ids;
export const getTotal = (state: State) => state.total;
export const getLoading = (state: State) => state.loading;
