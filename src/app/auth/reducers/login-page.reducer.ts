import { createReducer, on } from '@ngrx/store';

import { LoginPageActions } from '@app/auth/actions';

export const loginPageFeatureKey = 'loginPage';

export interface State {
  error: string | null;
  pending: boolean;
}

export const initialState: State = {
  error: null,
  pending: false
};

export const reducer = createReducer(
  initialState,
  on(LoginPageActions.login, state => ({
    ...state,
    error: null,
    pending: true
  }))
);

export const getPending = (state: State) => state.pending;
