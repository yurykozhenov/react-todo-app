import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

import TodoListContainer from '../../containers/TodoListContainer';
import Home from '../Home/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/todos">Todos</Link>
          </nav>

          <Route exact path="/" component={Home} />
          <Route path="/todos" component={TodoListContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
