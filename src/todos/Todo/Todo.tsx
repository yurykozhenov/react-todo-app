import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';
import React from 'react';

import { Todo as TodoType } from '../Todo';

interface Props {
  todo: TodoType;
  onTodoClick: () => void;
}

const Todo = ({ todo, onTodoClick }: Props) => (
  <ListItem dense button onClick={onTodoClick}>
    <Checkbox checked={todo.completed} tabIndex={-1} disableRipple />
    <ListItemText primary={todo.title} />
  </ListItem>
);

Todo.propTypes = {
  todo: PropTypes.shape({ completed: PropTypes.bool, title: PropTypes.string })
    .isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

export default Todo;
