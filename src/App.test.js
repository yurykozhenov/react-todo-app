import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';

import App from './App';

const store = createStore(
  (state = { auth: { isAuthenticated: false } }) => state,
);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
