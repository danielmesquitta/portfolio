import { createGlobalStyle } from 'styled-components';

import breakpoints from './breakpoints';
import typography from './typography';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap');
  
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    &:focus {
      outline: 0;
    }
  }

  html {
    hyphens: auto;
    min-height: 100%;
    word-wrap: break-word;
    position: relative;
    scroll-behavior: smooth;
    font-size: 62.5%; //1 rem = 10px; 10px/16px = 62.5%
    @media screen and (max-width: ${breakpoints.lg}) { // width < 1280
      font-size: 56.25%; //1 rem = 9px
    }
    @media screen and (max-width: ${breakpoints.sm}) { // width < 768
        font-size: 50%; //1 rem = 8px
    }
  }

  body {
    background: #f0f0f5;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font-family: ${typography.family}; 
    font-size: ${typography.size.s3};
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
