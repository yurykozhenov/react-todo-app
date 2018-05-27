import { combineReducers } from 'redux';

import authReducer from './auth/authReducer';
import todosReducer from './todos/todosReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  todos: todosReducer,
});

export default rootReducer;
