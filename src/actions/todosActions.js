export const TOGGLE_TODO = 'TOGGLE_TODO';

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id,
  };
};

export const REQUEST_TODOS = 'REQUEST_TODOS';

const requestTodos = () => ({
  type: REQUEST_TODOS,
});

export const RECEIVE_TODOS = 'RECEIVE_TODOS';

const receiveTodos = json => ({
  type: RECEIVE_TODOS,
  todos: json,
});

export const fetchTodos = () => {
  return (dispatch, getState) => {
    if (getState().todos.isFetching) {
      return Promise.resolve();
    }

    dispatch(requestTodos());

    return fetch('https://jsonplaceholder.typicode.com/todos')
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error),
      )
      .then(json => dispatch(receiveTodos(json.slice(0, 20))));
  };
};
