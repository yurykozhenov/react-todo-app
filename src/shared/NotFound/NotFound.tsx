import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import React from 'react';

const styles = createStyles({
  card: {
    maxWidth: 300,
    margin: '16px auto',
  },
  cardContent: {
    textAlign: 'center',
  },
});

const NotFound = withStyles(styles)(({ classes }: WithStyles<typeof styles>) => (
  <Card className={classes.card}>
    <CardContent className={classes.cardContent}>Page Not Found</CardContent>
  </Card>
));

export default NotFound;
