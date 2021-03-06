import { Map, Record } from 'immutable';

export interface AuthState extends Map<string, any> {
  token: any;
  loginLoading: boolean;
  loginLoaded: boolean;
  loginFailed: boolean;

  registerLoading: boolean;
  registerLoaded: boolean;
  registerFailed: boolean;

  recoverLoading: boolean;
  recoverLoaded: boolean;
  recoverFailed: boolean;
}

export const authrecord = Record({
  token: '',
  loginLoading: false,
  loginLoaded: false,
  loginFailed: false,

  registerLoading: false,
  registerLoaded: false,
  registerFailed: false,

  recoverLoading: false,
  recoverLoaded: false,
  recoverFailed: false,
});
