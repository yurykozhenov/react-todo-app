import { Todo } from './Todo';
import {
  RECEIVE_TODOS,
  REQUEST_TODOS,
  TodosAction,
  TOGGLE_TODO,
} from './todosActions';

export interface TodosState {
  isFetching?: boolean;
  todos: Todo[];
}

const todosReducer = (
  state: TodosState = { todos: [] },
  action: TodosAction,
): TodosState => {
  switch (action.type) {
    case TOGGLE_TODO:
      return {
        ...state,
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
