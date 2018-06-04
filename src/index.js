import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import leafUiTheme, { injectBaseStyles } from 'leaf-ui/theme';

import App from './App';

// ////////////////////////////////////////////////////////////

injectBaseStyles(leafUiTheme);

ReactDOM.render(
  <ThemeProvider theme={leafUiTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
