import React from 'react';
import List from '@material-ui/core/List';

import Todo from '../Todo/Todo';

const TodoList = ({ todos, onTodoClick }) => (
  <div>
    <List>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          onTodoClick={() => onTodoClick(todo.id)}
        />
      ))}
    </List>
  </div>
);

export default TodoList;
