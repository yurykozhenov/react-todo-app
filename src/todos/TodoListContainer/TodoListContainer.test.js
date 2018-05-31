import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import TodoListContainer from './TodoListContainer';

// TODO: Mock http call
describe('TodoListContainer', () => {
  it('should render without crashing', () => {
    const store = createStore(
      (state = { todos: { todos: [] } }) => state,
      applyMiddleware(thunkMiddleware),
    );

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
