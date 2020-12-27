import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { actionSetTextBoxesValues, actionChangeValue, actionSetModal } from '../../actions';
import functions from '../../firebase'; // REMEMBER TO FILL IN YOUR API VALUES
import { styles, proptTypesClasses } from '../../styles';

class Form extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { error: false, helperText: '' };
  }

  handleChange(event) {
    this.setState({ error: false, helperText: '' });
    const { changeValue, id } = this.props;
    changeValue({ [id]: event.target.value });
  }

  handleSubmit(event) {
    const zlibConvert = functions.httpsCallable('zlibConvert');
    event.preventDefault();
    const {
      values,
      id,
      setTextBoxesValues,
      setModal,
    } = this.props;
    if (!values[id]) {
      this.setState({ error: true, helperText: 'Please insert some text' });
      return;
    }
    zlibConvert({ type: id, value: values[id] })
      .then(result => setTextBoxesValues(result.data.values))
      .catch((err) => {
        setModal({ open: true, message: err.message });
      });
  }


  render() {
    const {
      classes,
      id,
      label,
      values,
      button,
    } = this.props;

    const {
      helperText,
      error,
    } = this.state;

    return (
      <div data-testid="form-div">
        <form className={classes.form} onSubmit={this.handleSubmit}>
          <TextField
            id={id}
            label={label}
            variant="outlined"
            multiline
            className={classes.textField}
            fullWidth
            rowsMax="100"
            helperText={helperText}
            onChange={this.handleChange}
            value={values[id]}
            error={error}
          />
          <div className={classes.centering}>
            <Button data-testid={`button-${id}`} variant="contained" className={classes.button} type="submit">{button}</Button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  values: state.values,
});

const mapDispatchToProps = () => ({
  setTextBoxesValues: actionSetTextBoxesValues,
  changeValue: actionChangeValue,
  setModal: actionSetModal,
});

Form.propTypes = {
  classes: PropTypes.shape(proptTypesClasses).isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired,
  values: PropTypes.shape({
    deflatedHex: PropTypes.string,
    deflatedBase64: PropTypes.string,
    inflatedAscii: PropTypes.string,
    inflatedHex: PropTypes.string,
  }).isRequired,
  setTextBoxesValues: PropTypes.func.isRequired,
  setModal: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps())(withStyles(styles)(Form));
