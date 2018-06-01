// @flow

import type { TodosAction } from './todosActions';
import { RECEIVE_TODOS, REQUEST_TODOS, TOGGLE_TODO } from './todosActions';
import type { Todo } from './Todo';

export type TodosState = {
  isFetching?: boolean,
  todos: Todo[],
};

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
            // TODO: Flow doesn't recognise action type here
            todo.id === (action: any).id
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
