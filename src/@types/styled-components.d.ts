import { ThemeProps } from 'styled-components';

import { breakpoints, colors, grid, typography } from '~/styles';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: typeof breakpoints;
    colors: typeof colors;
    grid: typeof grid;
    typography: typeof typography;
  }
}
