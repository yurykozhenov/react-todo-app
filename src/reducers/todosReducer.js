import {
  RECEIVE_TODOS,
  REQUEST_TODOS,
  TOGGLE_TODO,
} from '../actions/todosActions';

const todosReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case TOGGLE_TODO:
      return {
        todos: state.todos.map(
          todo =>
            todo.id === action.id
              ? { ...todo, completed: !todo.completed }
              : todo,
        ),
      };
    case REQUEST_TODOS:
      return { ...state, isFetching: true };
    case RECEIVE_TODOS:
      return { ...state, todos: action.todos, isFetching: false };
    default:
      return state;
  }
};

export default todosReducer;
