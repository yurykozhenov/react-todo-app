import React from 'react';
import List from 'material-ui/List';

import Todo from '../Todo/Todo';

const TodoList = ({ todos, handleTodoToggle }) => (
  <div>
    <List>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          handleToggle={() => handleTodoToggle(todo.id)}
        />
      ))}
    </List>
  </div>
);

export default TodoList;
