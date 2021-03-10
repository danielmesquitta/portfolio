import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
    min-height: 100%;
    hyphens: auto;
    word-wrap: break-word;
    overflow-x: hidden;
    position: relative;
    scroll-behavior: smooth;
    font-size: 62.5%; //1 rem = 10px; 10px/16px = 62.5%

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      font-size: 56.25%; //1 rem = 9px
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        font-size: 50%; //1 rem = 8px
    }
  }

  body {
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-font-smoothing: antialiased !important;
    background: ${({ theme }) => theme.colors.gray._100};
  }

  body, input, textarea, button, a, a:visited {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.typography.family};
    color: ${({ theme }) => theme.colors.gray._400};
  }

  input, textarea, button {
    border: 0;
    background-color: transparent;
  }

  a, a:visited, button {
    text-decoration: none;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  .loading {
    ${({ theme }) => {
      const { rotate360, speed } = theme.animations;
      return css`
        animation: ${speed._600} ${rotate360} infinite;
      `;
    }}
  }
`;

export default GlobalStyle;
