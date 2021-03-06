import styled, { css } from 'styled-components';

import { Section as LayoutSection, Grid as LayoutGrid } from '~/layouts';
import { hexToRgba } from '~/helpers';

export const Section = styled(LayoutSection)`
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.gray._400} 0%,
    ${({ theme }) => theme.colors.gray._400} 35%,
    ${({ theme }) => theme.colors.gray._100} 35%,
    ${({ theme }) => theme.colors.gray._100} 100%
  );

  > button {
    grid-column: 2 / 3;
    margin: 9rem auto 0rem;
  }
`;

export const ButtonsGrid = styled(LayoutGrid)`
  > button {
    grid-column: span 2;

    :first-of-type {
      grid-column: span 4;
    }
  }
`;

export const ProjectsGrid = styled(LayoutGrid)`
  margin: 3rem 0 0;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  border-radius: 0.4rem;
  ${({ theme }) => {
    const { speed, transitions } = theme.animations;
    return css`
      transition: all ${speed._100} ${transitions.basic};
    `;
  }}

  ${(props) =>
    props.hasShadow &&
    css`
      box-shadow: 0px 1.5rem 3.5rem
        ${({ theme }) => hexToRgba(theme.colors.gray._400, 0.05)};
    `}
`;
