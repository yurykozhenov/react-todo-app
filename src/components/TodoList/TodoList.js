import React from 'react';
import List from 'material-ui/List';

import Todo from '../Todo/Todo';

const TodoList = ({ todos, onTodoClick }) => (
  <List>
    {todos.map(todo =>
      <Todo key={todo.id} todo={todo} onClick={() => onTodoClick(todo.id)} />
    )}
  </List>
);

export default TodoList;
