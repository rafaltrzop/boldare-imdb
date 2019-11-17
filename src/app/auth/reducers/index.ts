import {
  Action,
  createSelector,
  createFeatureSelector,
  combineReducers
} from '@ngrx/store';

import * as fromRoot from '@app/reducers';
import * as fromAuth from '@app/auth/reducers/auth.reducer';
import * as fromLoginPage from '@app/auth/reducers/login-page.reducer';

export const authFeatureKey = 'auth';

export interface AuthState {
  [fromAuth.statusFeatureKey]: fromAuth.State;
  [fromLoginPage.loginPageFeatureKey]: fromLoginPage.State;
}

export interface State extends fromRoot.State {
  [authFeatureKey]: AuthState;
}

export function reducers(state: AuthState | undefined, action: Action) {
  return combineReducers({
    [fromAuth.statusFeatureKey]: fromAuth.reducer,
    [fromLoginPage.loginPageFeatureKey]: fromLoginPage.reducer
  })(state, action);
}

export const selectAuthState = createFeatureSelector<State, AuthState>(
  authFeatureKey
);

export const selectAuthStatusState = createSelector(
  selectAuthState,
  (state: AuthState) => state[fromAuth.statusFeatureKey]
);
export const getToken = createSelector(
  selectAuthStatusState,
  fromAuth.getToken
);
export const getLoggedIn = createSelector(getToken, token => !!token);

export const selectLoginPageState = createSelector(
  selectAuthState,
  (state: AuthState) => state[fromLoginPage.loginPageFeatureKey]
);
export const getLoginPageError = createSelector(
  selectLoginPageState,
  fromLoginPage.getError
);
export const getLoginPageLoading = createSelector(
  selectLoginPageState,
  fromLoginPage.getLoading
);
