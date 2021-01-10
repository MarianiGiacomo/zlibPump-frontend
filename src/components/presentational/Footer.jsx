import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { styles, proptTypesClasses } from '../../styles';

const Footer = (props) => {
  const { classes } = props;

  return (
    <div className={classes.footer}>
      <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-text="Deflate (encode) ASCII and hex string to zlib, inflate (decode) zlib and zlib base64 strings to ASCII and hex." data-url="https://zlibpump.app" data-via="jamomani" data-hashtags="zlib" data-dnt="true" data-show-count="false">Tweet</a>
      <br/>
      <a target="_blank" rel="noreferrer noopener" href="https://twitter.com/jamomani">By @jamomani</a>
    </div>
  )
}

Footer.propTypes = {
  classes: PropTypes.shape(proptTypesClasses).isRequired
}

export default withStyles(styles)(Footer);
