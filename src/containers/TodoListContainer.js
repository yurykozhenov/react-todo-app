import React, { Component } from 'react';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import { toggleTodo, fetchTodos } from '../actions/todosActions';
import TodoList from '../components/TodoList/TodoList';

class TodoListContainer extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    if (this.props.isFetching && this.props.todos.length === 0) {
      return <CircularProgress />;
    }

    return <TodoList {...this.props} />;
  }
}

const mapStateToProps = state => ({
  todos: state.todos.todos,
  isFetching: state.todos.isFetching,
});

const mapDispatchToProps = { toggleTodo, fetchTodos };

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
