import React from 'react';
import { render } from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AppGrid from './presentational/AppGrid';
import reducers from '../reducers';
import { theme } from '../styles';

const store = createStore(reducers);

export default function AppContainer() {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <CssBaseline />
          <AppGrid />
        </React.Fragment>
      </MuiThemeProvider>
    </Provider>
  );
}

const wrapper = document.getElementById('AppContainer');
if (wrapper) {
  render(<AppContainer />, wrapper);
}
