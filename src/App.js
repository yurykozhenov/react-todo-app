import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import TodoListContainer from './containers/TodoListContainer';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

class App extends Component {
  render() {
    const reducer = () => {};
    const store = createStore(reducer);

    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;
