// @flow

import React from 'react';
import ReactDOM from 'react-dom';

import Login from './Login';

describe('Login', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Login login={() => {}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
