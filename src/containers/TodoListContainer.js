import { connect } from 'react-redux';

import { toggleTodo } from '../actions/todosActions';
import TodoList from '../components/TodoList/TodoList';

const mapStateToProps = state => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleTodoToggle: id => {
      dispatch(toggleTodo(id));
    },
  };
};

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(
  TodoList,
);

export default TodoListContainer;
