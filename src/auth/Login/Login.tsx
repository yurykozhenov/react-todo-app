import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import * as PropTypes from 'prop-types';
import * as React from 'react';

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
