import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import InflateBox from './InflateBox';
import DeflateBox from './DeflateBox';
import { actionSetModal } from '../../actions';
import { styles, proptTypesClasses } from '../../styles';

function AppGrid(props) {
  const { classes, modal, setModal } = props;
  const handleClose = () => {
    setModal({ open: false });
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center" gutterBottom>ZlibPump</Typography>
          <div style={{ textAlign: 'center'}}>
            <img src="/src/img/favicon.png" />
          </div>
          <Typography variant="h5" align="center" gutterBottom>Inflate and deflate strings with zlib</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <InflateBox />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DeflateBox />
        </Grid>
      </Grid>
      <Typography variant="subtitle2" align="center" className={classes.footer} gutterBottom><a target="_blank" rel="noreferrer noopener" href="https://twitter.com/jamomani">By @jamomani</a></Typography>
      <Modal
        data-testid="modal"
        open={modal.open}
        onClose={handleClose}
      >
        <Paper className={classes.modal}>
          <p>{modal.message}</p>
          <Button data-testid="button-modal" variant="contained" className={classes.button} onClick={handleClose}>Close</Button>
        </Paper>
      </Modal>
    </div>
  );
}

const mapStateToProps = state => ({
  modal: state.modal,
});

const mapDispatchToProps = () => ({
  setModal: actionSetModal,
});

AppGrid.propTypes = {
  classes: PropTypes.shape(proptTypesClasses).isRequired,
  modal: PropTypes.shape({
    open: PropTypes.bool,
    message: PropTypes.string,
  }).isRequired,
  setModal: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps())(withStyles(styles)(AppGrid));
