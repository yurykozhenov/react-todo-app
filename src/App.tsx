import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Route, Link, Switch, withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { logout } from './auth/authActions';
import PrivateRoute from './shared/PrivateRoute/PrivateRoute';
import LoginContainer from './auth/LoginContainer/LoginContainer';
import TodoListContainer from './todos/TodoListContainer/TodoListContainer';
import Home from './home/Home/Home';
import NotFound from './shared/NotFound/NotFound';
import { State } from './State';
import { History } from 'history';

const decorate = withStyles({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

interface Props {
  isAuthenticated: boolean;
  logoutFromApp: () => void;
}

const App = decorate<Props>(({ classes, isAuthenticated, logoutFromApp }) => (
  <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography className={classes.flex} variant="title" color="inherit">
          React Todo App
        </Typography>
        <Button component={Link} color="inherit" {...{ to: '/' } as any}>
          Home
        </Button>
        {isAuthenticated ? (
          <React.Fragment>
            <Button
              component={Link}
              color="inherit"
              {...{ to: '/todos' } as any}
            >
              Todos
            </Button>
            <Button color="inherit" onClick={logoutFromApp}>
              Logout
            </Button>
          </React.Fragment>
        ) : (
          <Button component={Link} color="inherit" {...{ to: '/login' } as any}>
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={LoginContainer} />
      <PrivateRoute path="/todos" component={TodoListContainer} />
      <Route component={NotFound} />
    </Switch>
  </div>
));

const mapStateToProps = (state: State) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = (
  dispatch: Dispatch<any>,
  ownProps: { history: History },
) => ({
  logoutFromApp() {
    dispatch(logout());
    ownProps.history.push('/todos');
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(
  App,
) as React.ComponentType<any>);
