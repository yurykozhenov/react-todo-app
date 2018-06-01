import * as React from 'react';
import * as PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const decorate = withStyles({
  cardContainer: {
    padding: 16,
  },
  textField: {
    width: '100%',
  },
});

interface Props {
  login: () => void;
}

const Login = decorate<Props>(({ classes, login }) => (
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

Login['propTypes'] = {
  classes: PropTypes.object,
  login: PropTypes.func.isRequired,
};

export default Login;
