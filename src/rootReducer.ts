import { combineReducers, Reducer } from 'redux';

import authReducer from './auth/authReducer';
import todosReducer from './todos/todosReducer';
import { State } from './State';

const rootReducer: Reducer<State> = combineReducers({
  auth: authReducer,
  todos: todosReducer,
});

export default rootReducer;
