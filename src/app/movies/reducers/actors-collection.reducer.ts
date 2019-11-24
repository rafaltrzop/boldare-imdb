import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { ActorsCollectionApiActions } from '@app/movies/actions';
import { Actor } from '@app/movies/models';

export const actorsCollectionFeatureKey = 'actorsCollection';

export interface State extends EntityState<Actor> {}

export const adapter: EntityAdapter<Actor> = createEntityAdapter<Actor>({
  selectId: (actor: Actor) => actor.imdbId,
  sortComparer: false
});

export const initialState: State = adapter.getInitialState();

export const reducer = createReducer(
  initialState,
  on(ActorsCollectionApiActions.loadActorSuccess, (state, { actor }) =>
    adapter.addOne(actor, state)
  )
);

const { selectEntities } = adapter.getSelectors();
export const getActorsEntities = selectEntities;
