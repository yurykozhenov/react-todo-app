import { createStore } from 'redux';

import authReducer from './auth/authReducer';
import rootReducer from './rootReducer';
import todosReducer from './todos/todosReducer';

describe('Root reducer', () => {
  it('should return the initial state', () => {
    const store = createStore(rootReducer);
    expect(store.getState().auth).toEqual(authReducer(undefined, {} as any));
    expect(store.getState().todos).toEqual(todosReducer(undefined, {} as any));
  });
});
