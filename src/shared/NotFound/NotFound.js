// @flow

import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: {
    maxWidth: 300,
    margin: '16px auto',
  },
  cardContent: {
    textAlign: 'center',
  },
};

/* eslint-disable-next-line react/prop-types */
const NotFound = ({ classes }) => (
  <Card className={classes.card}>
    <CardContent className={classes.cardContent}>Page Not Found</CardContent>
  </Card>
);

export default withStyles(styles)(NotFound);
