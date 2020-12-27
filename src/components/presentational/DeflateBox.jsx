import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Form from './Form';
import { styles, proptTypesClasses } from '../../styles';

function DeflateBox(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Form id="inflatedAscii" label="Inflated ASCII" button="Deflate" />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Form id="inflatedHex" label="Inflated Hex" button="Deflate" />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

DeflateBox.propTypes = {
  classes: PropTypes.shape(proptTypesClasses).isRequired,
};

export default withStyles(styles)(DeflateBox);
