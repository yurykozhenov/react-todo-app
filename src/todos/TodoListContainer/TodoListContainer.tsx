import * as React from 'react';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import { toggleTodo, fetchTodos } from '../todosActions';
import TodoList from '../TodoList/TodoList';
import { Todo } from '../Todo';
import { State } from '../../State';

interface Props {
  todos: Todo[];
  isFetching: boolean;
  toggleTodo: () => any;
  fetchTodos: () => any;
}

class TodoListContainer extends React.Component<Props> {
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

const mapStateToProps = (state: State) => ({
  todos: state.todos.todos,
  isFetching: state.todos.isFetching,
});

const mapDispatchToProps = { toggleTodo, fetchTodos };

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
