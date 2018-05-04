import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleTodo, fetchTodos } from '../actions/todosActions';
import TodoList from '../components/TodoList/TodoList';

class TodoListContainer extends Component {
  componentDidMount() {
    const { fetchTodos } = this.props;

    fetchTodos();
  }

  render() {
    const { toggleTodo, ...rest } = this.props;

    return <TodoList {...rest} onTodoClick={toggleTodo} />;
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = { toggleTodo, fetchTodos };

TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(
  TodoListContainer,
);

export default TodoListContainer;
