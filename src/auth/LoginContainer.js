import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { login } from './authActions';
import Login from './Login/Login';

const mapDispatchToProps = (dispatch, ownProps) => ({
  login() {
    dispatch(login());
    ownProps.history.push('/todos');
  },
});

export default withRouter(connect(null, mapDispatchToProps)(Login));
