import React from 'react';
import { ListItem, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

const Todo = ({ todo, onTodoClick }) => (
  <ListItem dense button onClick={onTodoClick}>
    <Checkbox checked={todo.completed} tabIndex={-1} disableRipple />
    <ListItemText primary={todo.title} />
  </ListItem>
);

export default Todo;
