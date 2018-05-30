import { RECEIVE_TODOS, REQUEST_TODOS, TOGGLE_TODO } from './todosActions';
import todosReducer from './todosReducer';

describe('Todos reducer', () => {
  it('should return the initial state', () => {
    expect(todosReducer(undefined, {})).toEqual({ todos: [] });
  });

  it('should handle toggle todo', () => {
    expect(
      todosReducer(
        { todos: [{ id: 1, completed: false }] },
        { type: TOGGLE_TODO, id: 1 },
      ),
    ).toEqual({ todos: [{ id: 1, completed: true }] });
  });

  it('should handle request todos', () => {
    expect(todosReducer(undefined, { type: REQUEST_TODOS })).toEqual({
      isFetching: true,
      todos: [],
    });
  });

  it('should handle receive todos', () => {
    const todos = [{ id: 1 }, { id: 2 }];

    expect(todosReducer(undefined, { type: RECEIVE_TODOS, todos })).toEqual({
      isFetching: false,
      todos,
    });
  });
});
