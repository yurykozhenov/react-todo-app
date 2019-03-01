import { Dispatch } from 'redux';

import { State } from '../State';

import { Todo } from './Todo';

export type TodosAction =
  | ToggleTodoAction
  | ReceiveTodosAction
  | RequestTodosAction;

export const TOGGLE_TODO = 'TOGGLE_TODO';
export interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  id: number;
}

export const toggleTodo = (id: number): ToggleTodoAction => ({
  type: TOGGLE_TODO,
  id,
});

export const REQUEST_TODOS = 'REQUEST_TODOS';
export interface RequestTodosAction {
  type: typeof REQUEST_TODOS;
}

const requestTodos = (): RequestTodosAction => ({
  type: REQUEST_TODOS,
});

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export interface ReceiveTodosAction {
  type: typeof RECEIVE_TODOS;
  todos: Todo[];
}

const receiveTodos = (todos: Todo[]): ReceiveTodosAction => ({
  type: RECEIVE_TODOS,
  todos,
});

export const fetchTodos = () => (
  dispatch: Dispatch<TodosAction>,
  getState: () => State,
) => {
  const state = getState();

  if (state.todos.isFetching) {
    return Promise.resolve();
  }

  dispatch(requestTodos());

  return fetch(`${String(process.env.REACT_APP_API_URL)}/todos`)
    .then(response => response.json())
    .then((todos: Todo[]) => dispatch(receiveTodos(todos.slice(0, 20))));
};
