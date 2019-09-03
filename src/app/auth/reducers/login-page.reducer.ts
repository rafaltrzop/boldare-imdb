import { createReducer, on } from '@ngrx/store';

import { AuthActions, AuthApiActions } from '@app/auth/actions';

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
  on(AuthActions.login, state => ({
    ...state,
    error: null,
    pending: true
  })),
  on(AuthApiActions.loginSuccess, state => ({
    ...state,
    error: null,
    pending: false
  })),
  on(AuthApiActions.loginFailure, (state, { error: { message } }) => ({
    ...state,
    error: message,
    pending: false
  }))
);

export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
