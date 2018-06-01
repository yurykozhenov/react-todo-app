// @flow

import { login, LOGIN, logout, LOGOUT } from './authActions';

describe('Auth actions', () => {
  it('should create an action to login', () => {
    const expectedAction = {
      type: LOGIN,
    };
    expect(login()).toEqual(expectedAction);
  });

  it('should create an action to logout', () => {
    const expectedAction = {
      type: LOGOUT,
    };
    expect(logout()).toEqual(expectedAction);
  });
});
