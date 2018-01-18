import { RECEIVE_TODOS, REQUEST_TODOS, TOGGLE_TODO } from '../actions';

const todos = (state = [], action) => {
  switch (action.type) {
    case TOGGLE_TODO:
      return state.map(todo =>
        (todo.id === action.id)
          ?  { ...todo, completed: !todo.completed }
          : todo
      );
    case REQUEST_TODOS:
      return state;
    case RECEIVE_TODOS:
      return action.todos;
    default:
      return state;
  }
};

export default todos;
