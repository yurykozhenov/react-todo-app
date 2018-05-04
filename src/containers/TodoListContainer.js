import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CircularProgress } from 'material-ui/Progress';

import { toggleTodo, fetchTodos } from '../actions/todosActions';
import TodoList from '../components/TodoList/TodoList';

class TodoListContainer extends Component {
  componentDidMount() {
    const { fetchTodos } = this.props;

    fetchTodos();
  }

  render() {
    const { toggleTodo, todos, isFetching } = this.props;

    if (isFetching && todos.length === 0) {
      return <CircularProgress />;
    }

    return <TodoList todos={todos} onTodoClick={toggleTodo} />;
  }
}

const mapStateToProps = state => ({
  todos: state.todos.todos,
  isFetching: state.todos.isFetching,
});

const mapDispatchToProps = { toggleTodo, fetchTodos };

TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(
  TodoListContainer,
);

export default TodoListContainer;
