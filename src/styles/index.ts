import styled from 'styled-components';

import { Section, Grid } from '../layouts';

export { default as breakpoints } from './breakpoints';
export { default as colors } from './colors';
export { default as GlobalStyle } from './global';
export { default as typography } from './typography';

const HeroSection = styled(Section)`
  background: linear-gradient(
    107.15deg,
    ${({ theme }) => theme.colors.primary._200} 0%,
    ${({ theme }) => theme.colors.secondary._300} 100%
  );
`;

const HeroGrid = styled(Grid)``;

export default { HeroSection, HeroGrid };
