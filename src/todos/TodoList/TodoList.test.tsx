import * as React from 'react';
import * as ReactDOM from 'react-dom';

import TodoList from './TodoList';

describe('TodoList', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TodoList todos={[]} toggleTodo={() => {}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
