import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';

import LoginContainer from './LoginContainer';

describe('LoginContainer', () => {
  it('should render without crashing', () => {
    const store = createStore((state = {}) => state);

    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginContainer />
        </MemoryRouter>
      </Provider>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
