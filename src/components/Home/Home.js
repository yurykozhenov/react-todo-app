import React from 'react';
import { withStyles } from 'material-ui/styles';

import logo from '../../logo.svg';

const styles = {
  app: {
    textAlign: 'center',
  },
  appLogo: {
    animation: 'App-logo-spin infinite 20s linear',
    height: 80,
  },
  appHeader: {
    backgroundColor: '#222',
    height: 150,
    padding: 20,
    color: 'white',
  },
  appTitle: {
    fontSize: '1.5em',
  },
  appIntro: {
    fontSize: 'large',
  },
  '@keyframes App-logo-spin': {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  },
};

const Home = ({ classes }) => (
  <div className={classes.app}>
    <header className={classes.appHeader}>
      <img src={logo} className={classes.appLogo} alt="logo" />
      <h1 className={classes.appTitle}>Welcome to React</h1>
    </header>
    <p className={classes.appIntro}>
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
);

export default withStyles(styles)(Home);
