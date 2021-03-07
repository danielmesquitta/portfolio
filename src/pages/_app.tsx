import React from 'react';
import { Helmet } from 'react-helmet';

import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { ScrollStateProvider } from '~/hooks';
import * as theme from '~/styles';

const { GlobalStyle } = theme;

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
      <ScrollStateProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ScrollStateProvider>
    </ThemeProvider>
  </>
);

export default App;
