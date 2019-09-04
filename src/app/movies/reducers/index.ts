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
  [fromMovies.collectionFeatureKey]: fromMovies.State;
}

export interface State extends fromRoot.State {
  [moviesFeatureKey]: MoviesState;
}

export function reducers(state: MoviesState | undefined, action: Action) {
  return combineReducers({
    [fromMovies.collectionFeatureKey]: fromMovies.reducer
  })(state, action);
}

export const selectMoviesState = createFeatureSelector<State, MoviesState>(
  moviesFeatureKey
);

export const selectMoviesCollectionState = createSelector(
  selectMoviesState,
  (state: MoviesState) => state[fromMovies.collectionFeatureKey]
);
export const getMovies = createSelector(
  selectMoviesCollectionState,
  fromMovies.getMovies
);
