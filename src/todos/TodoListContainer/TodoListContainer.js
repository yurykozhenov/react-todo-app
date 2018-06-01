// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import { toggleTodo, fetchTodos } from '../todosActions';
import TodoList from '../TodoList/TodoList';
import type { Todo } from '../Todo';

type Props = {
  todos: Todo[],
  isFetching: boolean,
  toggleTodo: () => any,
  fetchTodos: () => any,
};

/* eslint-disable react/prop-types */
class TodoListContainer extends Component<Props> {
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
