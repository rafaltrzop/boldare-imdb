import {
  Action,
  createSelector,
  createFeatureSelector,
  combineReducers
} from '@ngrx/store';

import * as fromRoot from '@app/reducers';
import * as fromLoginPage from '@app/auth/reducers/login-page.reducer';

export const authFeatureKey = 'auth';

export interface AuthState {
  [fromLoginPage.loginPageFeatureKey]: fromLoginPage.State;
}

export interface State extends fromRoot.State {
  [authFeatureKey]: AuthState;
}

export function reducers(state: AuthState | undefined, action: Action) {
  return combineReducers({
    [fromLoginPage.loginPageFeatureKey]: fromLoginPage.reducer
  })(state, action);
}

export const selectAuthState = createFeatureSelector<State, AuthState>(
  authFeatureKey
);

export const selectLoginPageState = createSelector(
  selectAuthState,
  (state: AuthState) => state[fromLoginPage.loginPageFeatureKey]
);
export const getLoginPageError = createSelector(
  selectLoginPageState,
  fromLoginPage.getError
);
export const getLoginPagePending = createSelector(
  selectLoginPageState,
  fromLoginPage.getPending
);
