// @flow
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import fetchMock from 'fetch-mock';

import { fetchTodos, RECEIVE_TODOS, REQUEST_TODOS } from './todosActions';

const mockStore = configureMockStore([thunkMiddleware]);

describe('Todos actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('should receive todos when fetching todos has been done', () => {
    const todos = [{ id: 1, title: 'do something' }];

    fetchMock.getOnce('https://jsonplaceholder.typicode.com/todos', {
      body: todos,
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: REQUEST_TODOS },
      { type: RECEIVE_TODOS, todos },
    ];

    const store = mockStore({ todos: [] });

    return store.dispatch(fetchTodos()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
