import { connect, Dispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { login } from '../authActions';
import Login from '../Login/Login';
import { AuthAction } from '../authReducer';
import { History } from 'history';

const mapDispatchToProps = (
  dispatch: Dispatch<AuthAction>,
  ownProps: { history: History },
) => ({
  login() {
    dispatch(login());
    ownProps.history.push('/todos');
  },
});

export default withRouter(connect(null, mapDispatchToProps)(
  Login,
) as React.ComponentType<any>);
