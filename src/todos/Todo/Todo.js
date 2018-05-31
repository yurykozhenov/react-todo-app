import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const Todo = ({ todo, onTodoClick }) => (
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