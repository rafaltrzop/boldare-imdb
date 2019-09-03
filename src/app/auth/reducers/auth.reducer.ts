import { createReducer, on } from '@ngrx/store';

import { AuthActions, AuthApiActions } from '@app/auth/actions';

export const statusFeatureKey = 'status';

export interface State {
  token: string | null;
}

export const initialState: State = {
  token: localStorage.getItem('token')
};

export const reducer = createReducer(
  initialState,
  on(AuthApiActions.loginSuccess, (state, { token }) => ({ ...state, token })),
  on(AuthActions.logout, state => ({ ...state, token: null }))
);

export const getToken = (state: State) => state.token;
