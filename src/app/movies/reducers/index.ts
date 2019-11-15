import {
  Action,
  createSelector,
  createFeatureSelector,
  combineReducers
} from '@ngrx/store';

import * as fromRoot from '@app/reducers';
import * as fromMovies from '@app/movies/reducers/movies-collection.reducer';

export const moviesFeatureKey = 'movies';

export interface MoviesState {
  [fromMovies.moviesFeatureKey]: fromMovies.State;
}

export interface State extends fromRoot.State {
  [moviesFeatureKey]: MoviesState;
}

export function reducers(state: MoviesState | undefined, action: Action) {
  return combineReducers({
    [fromMovies.moviesFeatureKey]: fromMovies.reducer
  })(state, action);
}

export const selectMoviesState = createFeatureSelector<State, MoviesState>(
  moviesFeatureKey
);

export const selectMoviesCollectionState = createSelector(
  selectMoviesState,
  (state: MoviesState) => state[fromMovies.moviesFeatureKey]
);
export const getMoviesCollection = createSelector(
  selectMoviesCollectionState,
  fromMovies.getCollection
);
export const getMoviesCollectionTotal = createSelector(
  selectMoviesCollectionState,
  fromMovies.getTotal
);
export const getMoviesCollectionIsLoading = createSelector(
  selectMoviesCollectionState,
  fromMovies.getIsLoading
);
