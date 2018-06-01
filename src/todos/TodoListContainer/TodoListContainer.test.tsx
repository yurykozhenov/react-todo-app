import * as fetchMock from 'fetch-mock';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import TodoListContainer from './TodoListContainer';

describe('TodoListContainer', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('should render without crashing', () => {
    const store = createStore(
      (state = { todos: { todos: [] } }) => state,
      applyMiddleware(thunkMiddleware),
    );

    fetchMock.getOnce(`${String(process.env.REACT_APP_API_URL)}/todos`, {
      body: [],
      headers: { 'content-type': 'application/json' },
    });

    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <TodoListContainer />
      </Provider>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
