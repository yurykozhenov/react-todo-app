import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React from 'react';
import { RouteComponentProps } from 'react-router';

const styles = createStyles({
  cardContainer: {
    padding: 16,
  },
  textField: {
    width: '100%',
  },
});

interface Props extends WithStyles<typeof styles>, RouteComponentProps {
  login: () => void;
}

const Login = withStyles(styles)(({ classes, login }: Props) => (
  <div className={classes.cardContainer}>
    <Card>
      <CardHeader title="Login" />
      <CardContent>
        <form noValidate autoComplete="off">
          <TextField className={classes.textField} />
          <TextField className={classes.textField} type="password" />
          <Button onClick={login}>Login</Button>
        </form>
      </CardContent>
    </Card>
  </div>
));

Login.propTypes = {
  classes: PropTypes.object,
  login: PropTypes.func.isRequired,
};

export default Login;
