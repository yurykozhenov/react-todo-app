import { AuthState } from './auth/authReducer';
import { TodosState } from './todos/todosReducer';

export interface State {
  auth: AuthState;
  todos: TodosState;
}
