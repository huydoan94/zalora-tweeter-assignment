import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './MessageCard.styles';

function MessageCard({ message, classes }) {
  return (
    <Paper className={classes.card}>
      {message}
    </Paper>
  );
}

MessageCard.propTypes = {
  message: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MessageCard);
