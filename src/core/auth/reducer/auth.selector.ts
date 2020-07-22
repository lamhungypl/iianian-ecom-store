import { createSelector } from 'reselect';

import * as fromAuth from './auth.reducer';
import { AppState } from '../../state.interface';

export const getState = (State: AppState) => State.auth;
export const getToken = createSelector(getState, fromAuth.getToken);

export const get_loginLoading = createSelector(
  getState,
  fromAuth.getLoginLoading
);
export const get_loginLoaded = createSelector(
  getState,
  fromAuth.getLoginLoaded
);
export const get_loginFailed = createSelector(
  getState,
  fromAuth.getLoginFailed
);

export const get_registerLoading = createSelector(
  getState,
  fromAuth.getRegisterLoading
);
export const get_registerLoaded = createSelector(
  getState,
  fromAuth.getRegisterLoaded
);
export const get_registerFailed = createSelector(
  getState,
  fromAuth.getRegisterFailed
);

export const get_recoverLoading = createSelector(
  getState,
  fromAuth.getRecoverLoading
);
export const get_recoverLoaded = createSelector(
  getState,
  fromAuth.getRecoverLoaded
);
export const get_recoverFailed = createSelector(
  getState,
  fromAuth.getRecoverFailed
);
