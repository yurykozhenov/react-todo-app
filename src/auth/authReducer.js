// @flow

import { LOGIN, LOGOUT } from './authActions';

export type AuthState = {
  isAuthenticated: boolean,
};

export type AuthAction = {
  type: string,
};

const authReducer = (
  state: AuthState = { isAuthenticated: false },
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isAuthenticated: true };
    case LOGOUT:
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};

export default authReducer;
