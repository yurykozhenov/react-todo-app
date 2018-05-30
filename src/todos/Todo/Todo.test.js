import React from 'react';
import ReactDOM from 'react-dom';

import Todo from './Todo';

describe('Todo', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Todo todo={{}} onTodoClick={() => {}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
