import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { styles, proptTypesClasses } from '../../styles';

const Footer = (props) => {
  const { classes } = props;

  return (
    <div className={classes.footer}>
      <a target="_blank" rel="noreferrer noopener" href="https://twitter.com/jamomani">By @jamomani</a>
    </div>
  )
}

Footer.propTypes = {
  classes: PropTypes.shape(proptTypesClasses).isRequired
}

export default withStyles(styles)(Footer);
