import { LOGIN, LOGOUT } from './authActions';
import authReducer from './authReducer';

describe('Auth reducer', () => {
  it('should return the initial state', () => {
    expect(authReducer(undefined, {} as any)).toEqual({
      isAuthenticated: false,
    });
  });

  it('should handle login', () => {
    expect(authReducer(undefined, { type: LOGIN })).toEqual({
      isAuthenticated: true,
    });
  });

  it('should handle logout', () => {
    expect(authReducer(undefined, { type: LOGOUT })).toEqual({
      isAuthenticated: false,
    });
  });
});
