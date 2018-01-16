import React from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

const TodoList = ({ todos, toggleCompleted }) => (
  <List>
    {todos.map(todo =>
      <ListItem
        key={todo.id}
        dense
        button
        onClick={toggleCompleted(todo)}>
        <Checkbox
          checked={todo.completed}
          tabIndex={-1}
          disableRipple
        />
        <ListItemText primary={todo.title} />
      </ListItem>
    )}
  </List>
)

export default TodoList;
