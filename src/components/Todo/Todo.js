import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const Todo = ({ todo, onTodoClick }) => (
  <ListItem dense button onClick={onTodoClick}>
    <Checkbox checked={todo.completed} tabIndex={-1} disableRipple />
    <ListItemText primary={todo.title} />
  </ListItem>
);

export default Todo;
