import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../@types';

import { GlobalStyle, breakpoints, colors, typography } from '../styles';

const theme: Theme = {
  breakpoints,
  colors,
  typography,
};

const App = ({ Component, pageProps }) => (
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
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default App;
