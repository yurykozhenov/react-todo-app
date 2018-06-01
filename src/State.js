// @flow

import type { AuthState } from './auth/authReducer';
import type { TodosState } from './todos/todosReducer';

export type State = {
  auth: AuthState,
  todos: TodosState,
};
