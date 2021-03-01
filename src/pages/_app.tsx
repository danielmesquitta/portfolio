import { ThemeProvider } from 'styled-components';

import { GlobalStyle, breakpoints, colors, typography } from '../styles';

const theme = {
  breakpoints,
  colors,
  typography,
};

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default App;
