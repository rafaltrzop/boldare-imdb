import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { MoviesCollectionApiActions } from '@app/movies/actions';
import { Movie } from '@app/movies/models';

export const moviesCollectionFeatureKey = 'moviesCollection';

export interface State extends EntityState<Movie> {}

export const adapter: EntityAdapter<Movie> = createEntityAdapter<Movie>({
  selectId: (movie: Movie) => movie.imdbId,
  sortComparer: false
});

export const initialState: State = adapter.getInitialState();

export const reducer = createReducer(
  initialState,
  on(MoviesCollectionApiActions.loadMovieSuccess, (state, { movie }) =>
    adapter.addOne(movie, state)
  ),
  on(
    MoviesCollectionApiActions.loadMoviesSuccess,
    (state, { collection: movies }) => adapter.upsertMany(movies, state)
  )
);

const { selectEntities } = adapter.getSelectors();
export const getMoviesEntities = selectEntities;
