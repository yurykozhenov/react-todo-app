// @flow

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { login } from '../authActions';
import type { AuthAction, AuthState } from '../authReducer';
import Login from '../Login/Login';

const mapDispatchToProps = (
  dispatch: (action: AuthAction) => AuthState,
  ownProps,
) => ({
  login() {
    dispatch(login());
    ownProps.history.push('/todos');
  },
});

export default withRouter(connect(null, mapDispatchToProps)(Login));
