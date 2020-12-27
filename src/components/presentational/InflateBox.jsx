import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Form from './Form';
import { styles, proptTypesClasses } from '../../styles';

function InflateBox(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Form id="deflatedHex" label="Deflated Hex" button="Inflate" />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Form id="deflatedBase64" label="Deflated base64" button="Inflate" />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}


InflateBox.propTypes = {
  classes: PropTypes.shape(proptTypesClasses).isRequired,
};

export default withStyles(styles)(InflateBox);
