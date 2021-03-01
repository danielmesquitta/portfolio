import { ThemeProps } from 'styled-components';

import { breakpoints, colors, typography } from '../styles';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: typeof breakpoints;
    colors: typeof colors;
    typography: typeof typography;
  }
}
