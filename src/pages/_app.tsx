import React from 'react';
import { Helmet } from 'react-helmet';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { RootProvider } from '~/hooks';
import * as styles from '~/styles';

const { GlobalStyle, ...theme } = styles;

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Helmet>
      <title>danielmesquitta | Portfolio</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <ThemeProvider theme={theme}>
      <RootProvider>
        <ToastContainer />
        <GlobalStyle />
        <Component {...pageProps} />
      </RootProvider>
    </ThemeProvider>
  </>
);

export default App;
