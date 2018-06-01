// @flow

import { combineReducers } from 'redux';

import authReducer from './auth/authReducer';
import todosReducer from './todos/todosReducer';
import type { State } from './State';

const rootReducer: () => State = combineReducers({
  auth: authReducer,
  todos: todosReducer,
});

export default rootReducer;
