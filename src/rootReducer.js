import { combineReducers } from 'redux';

import todosReducer from './todos/todosReducer';

const rootReducer = combineReducers({
  todos: todosReducer,
});

export default rootReducer;
