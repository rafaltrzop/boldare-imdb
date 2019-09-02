import { Action, combineReducers } from '@ngrx/store';

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
