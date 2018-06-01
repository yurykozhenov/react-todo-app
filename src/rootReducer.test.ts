import { createStore } from 'redux';

import authReducer from './auth/authReducer';
import todosReducer from './todos/todosReducer';
import rootReducer from './rootReducer';

describe('Root reducer', () => {
  it('should return the initial state', () => {
    const store = createStore(rootReducer);
    expect(store.getState().auth).toEqual(authReducer(undefined, {} as any));
    expect(store.getState().todos).toEqual(todosReducer(undefined, {} as any));
  });
});
