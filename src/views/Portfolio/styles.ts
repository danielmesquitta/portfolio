import styled from 'styled-components';

import { Section as LayoutSection, Grid as LayoutGrid } from '~/layouts';

export const Section = styled(LayoutSection)`
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.gray._400} 0,
    ${({ theme }) => theme.colors.gray._400} 50rem,
    ${({ theme }) => theme.colors.gray._100} 50rem,
    ${({ theme }) => theme.colors.gray._100} 100%
  );

  > a {
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
`;
