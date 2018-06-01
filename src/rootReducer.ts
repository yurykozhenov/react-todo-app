import { combineReducers, Reducer } from 'redux';

import authReducer from './auth/authReducer';
import { State } from './State';
import todosReducer from './todos/todosReducer';

const rootReducer: Reducer<State> = combineReducers({
  auth: authReducer,
  todos: todosReducer,
});

export default rootReducer;
