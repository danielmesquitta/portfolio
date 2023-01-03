import React from 'react';
import { Helmet } from 'react-helmet';
import { ToastContainer } from 'react-toastify';

import { AppProps } from 'next/app';
import 'react-toastify/dist/ReactToastify.min.css';
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

      <link
        rel="stylesheet"
        href="https://app.opinahub.com.br/script/main.css"
      />
    </Helmet>

    <ThemeProvider theme={theme}>
      <RootProvider>
        <ToastContainer />
        <GlobalStyle />
        <Component {...pageProps} />
      </RootProvider>
    </ThemeProvider>

    <div
      id="app-opinahub"
      data-opinahub="939e35cb-f2f3-44d2-a9a6-169f1597d1a0"
    />
    <script type="module" src="https://app.opinahub.com.br/script/main.js" />
  </>
);

export default App;
