import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import InflateBox from './InflateBox';
import DeflateBox from './DeflateBox';
import Footer from './Footer';
import { actionSetModal } from '../../actions';
import { styles, proptTypesClasses } from '../../styles';
import logo from '../../assets/images/logo.png'

function AppGrid(props) {
  const { classes, modal, setModal } = props;
  const handleClose = () => {
    setModal({ open: false });
  };

  return (
    <div className={classes.root}>
      <main role="main">
        <Grid container spacing={10}>
          <Grid item xs={12}>
          <header className={classes.header}>
            <h1 className={classes.header}>Inflate and deflate z-lib strings</h1>
              <img src={ logo } aria-hidden="true"/>
            <h2 className={classes.header} id="about">Inflate and deflate <a href="https://www.zlib.net/">z-lib</a> strings, convert them to base64 hex and ASCII</h2>
          </header>
          </Grid>
            <Grid item xs={12} sm={6}>
              <InflateBox />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DeflateBox />
            </Grid>
        </Grid>
      </main>
      <footer>
        <Footer/>
      </footer>
      <Modal
        data-testid="modal"
        open={modal.open}
        onClose={handleClose}>
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
