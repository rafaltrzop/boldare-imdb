import {
  Action,
  createSelector,
  createFeatureSelector,
  combineReducers
} from '@ngrx/store';

import * as fromRoot from '@app/reducers';
import * as fromMoviesCollection from '@app/movies/reducers/movies-collection.reducer';
import * as fromSearchResults from '@app/movies/reducers/search-results.reducer';
import { Movie } from '@app/movies/models';

export const moviesFeatureKey = 'movies';

export interface MoviesState {
  [fromMoviesCollection.moviesCollectionFeatureKey]: fromMoviesCollection.State;
  [fromSearchResults.searchResultsFeatureKey]: fromSearchResults.State;
}

export interface State extends fromRoot.State {
  [moviesFeatureKey]: MoviesState;
}

export function reducers(state: MoviesState | undefined, action: Action) {
  return combineReducers({
    [fromMoviesCollection.moviesCollectionFeatureKey]:
      fromMoviesCollection.reducer,
    [fromSearchResults.searchResultsFeatureKey]: fromSearchResults.reducer
  })(state, action);
}

export const selectMoviesState = createFeatureSelector<State, MoviesState>(
  moviesFeatureKey
);

export const selectMoviesCollectionState = createSelector(
  selectMoviesState,
  (state: MoviesState) => state[fromMoviesCollection.moviesCollectionFeatureKey]
);
export const getMoviesCollectionEntities = createSelector(
  selectMoviesCollectionState,
  fromMoviesCollection.getMoviesEntities
);
export const getSelectedMovie = createSelector(
  getMoviesCollectionEntities,
  fromRoot.selectRouterState,
  (entities, router): Movie =>
    router.state && entities[router.state.params.movieId]
);

export const selectSearchResultsState = createSelector(
  selectMoviesState,
  (state: MoviesState) => state[fromSearchResults.searchResultsFeatureKey]
);
export const getSearchResultsIds = createSelector(
  selectSearchResultsState,
  fromSearchResults.getIds
);
export const getSearchResults = createSelector(
  getMoviesCollectionEntities,
  getSearchResultsIds,
  (entities, ids): Movie[] => ids.map(id => entities[id])
);
export const getSearchResultsTotal = createSelector(
  selectSearchResultsState,
  fromSearchResults.getTotal
);
export const getSearchResultsLoading = createSelector(
  selectSearchResultsState,
  fromSearchResults.getLoading
);
