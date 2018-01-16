import React, { Component } from 'react';
import TodoList from '../components/TodoList';

class TodoListContainer extends Component {
  constructor() {
    super();

    this.state = { todos: [] }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(todos => this.setState({ todos }))
  }

  toggleCompleted = todo => () => {
    const { todos } = this.state;

    const newTodos = todos.map(todoInTodos => {
      if (todoInTodos.id === todo.id) {
        return Object.assign({}, todo, { completed: !todo.completed });
      }

      return todoInTodos;
    });

    this.setState({
      todos: newTodos,
    });
  }

  render() {
    return <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted} />;
  }
}

export default TodoListContainer;
