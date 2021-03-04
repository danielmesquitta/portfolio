import { ThemeProps } from 'styled-components';

import { animations, breakpoints, colors, grid, typography } from '~/styles';

declare module 'styled-components' {
  export interface DefaultTheme {
    animations: typeof animations;
    breakpoints: typeof breakpoints;
    colors: typeof colors;
    grid: typeof grid;
    typography: typeof typography;
  }
}
