import * as styles from '~/styles';

const { GlobalStyle, ...theme } = styles;

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    animations: typeof theme.animations;
  }
}
