import { createMuiTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


export const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

export const styles = () => ({
  root: {
    flexGrow: 1,
    marginRight: theme.spacing(),
    marginLeft: theme.spacing(),
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  form: {

  },
  centering: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: theme.spacing(),
  },
  footer: {
    margin: theme.spacing(2),
  },
  modal: {
    height: '30%',
    width: '30%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

export const proptTypesClasses = {
  root: PropTypes.string,
  paper: PropTypes.string,
  form: PropTypes.string,
  centering: PropTypes.string,
  button: PropTypes.string,
  footer: PropTypes.string,
  modal: PropTypes.string,
};
