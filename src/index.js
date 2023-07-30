import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components';
import { GlobalStyles, theme } from 'styles';
import { Global, ThemeProvider } from '@emotion/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
