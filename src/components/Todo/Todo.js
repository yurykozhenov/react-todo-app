import React from 'react';
import { ListItem, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

const Todo = ({ todo, onClick }) => (
  <ListItem
    dense
    button
    onClick={() => onClick(todo)}>
    <Checkbox
      checked={todo.completed}
      tabIndex={-1}
      disableRipple
    />
    <ListItemText primary={todo.title} />
  </ListItem>
);

export default Todo;
