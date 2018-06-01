import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';

import PrivateRoute from './PrivateRoute';

describe('PrivateRoute', () => {
  it('should render without crashing', () => {
    const store = createStore(
      (state = { auth: { isAuthenticated: false } }) => state,
    );

    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <MemoryRouter>
          <PrivateRoute component={<div />} />
        </MemoryRouter>
      </Provider>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
