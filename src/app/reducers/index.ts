import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '@env/environment';

// tslint:disable-next-line:no-empty-interface
export interface State {}

export const reducers: ActionReducerMap<State> = {};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
