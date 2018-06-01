import * as React from 'react';
import * as PropTypes from 'prop-types';
import List from '@material-ui/core/List';

import Todo from '../Todo/Todo';
import { Todo as TodoType } from '../Todo';

interface Props {
  todos: TodoType[];
  toggleTodo: (id: number) => void;
}

const TodoList = ({ todos, toggleTodo }: Props) => (
  <div>
    <List>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          onTodoClick={() => toggleTodo(todo.id)}
        />
      ))}
    </List>
  </div>
);

TodoList['propTypes'] = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      completed: PropTypes.bool,
      title: PropTypes.string,
    }),
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default TodoList;
