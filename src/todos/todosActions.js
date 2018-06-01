// @flow

import type { State } from '../State';

import type { Todo } from './Todo';

/* eslint-disable no-use-before-define */

type GetState = () => State;
type Dispatch = (action: TodosAction | ThunkAction | PromiseAction) => any;
type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
type PromiseAction = Promise<TodosAction>;

export type TodosAction =
  | ToggleTodoAction
  | ReceiveTodosAction
  | RequestTodosAction;

/* eslint-enable no-use-before-define */

export const TOGGLE_TODO = 'TOGGLE_TODO';
export type ToggleTodoAction = { type: typeof TOGGLE_TODO, id: number };

export const toggleTodo = (id: number): ToggleTodoAction => ({
  type: TOGGLE_TODO,
  id,
});

export const REQUEST_TODOS = 'REQUEST_TODOS';
export type RequestTodosAction = { type: typeof REQUEST_TODOS };

const requestTodos = (): RequestTodosAction => ({
  type: REQUEST_TODOS,
});

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export type ReceiveTodosAction = { type: typeof RECEIVE_TODOS, todos: Todo[] };

const receiveTodos = (todos: Todo[]): ReceiveTodosAction => ({
  type: RECEIVE_TODOS,
  todos,
});

export const fetchTodos = (): ThunkAction => (dispatch, getState) => {
  const state = getState();

  if (state.todos.isFetching) {
    return Promise.resolve();
  }

  dispatch(requestTodos());

  return fetch(`${String(process.env.REACT_APP_API_URL)}/todos`)
    .then(response => response.json())
    .then((todos: Todo[]) => dispatch(receiveTodos(todos.slice(0, 20))));
};
