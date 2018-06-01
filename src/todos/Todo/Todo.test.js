// @flow

import React from 'react';
import ReactDOM from 'react-dom';

import Todo from './Todo';

describe('Todo', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    const todo = { id: 1, title: 'Todo', completed: false };
    ReactDOM.render(<Todo todo={todo} onTodoClick={() => {}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
