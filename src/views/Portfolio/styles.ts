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

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    background: linear-gradient(
      to bottom,
      ${({ theme }) => theme.colors.gray._400} 0,
      ${({ theme }) => theme.colors.gray._400} 60rem,
      ${({ theme }) => theme.colors.gray._100} 60rem,
      ${({ theme }) => theme.colors.gray._100} 100%
    );
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    background: linear-gradient(
      to bottom,
      ${({ theme }) => theme.colors.gray._400} 0,
      ${({ theme }) => theme.colors.gray._400} 70rem,
      ${({ theme }) => theme.colors.gray._100} 70rem,
      ${({ theme }) => theme.colors.gray._100} 100%
    );
  }

  > a {
    grid-column: 2 / 3;
    margin: 9rem auto 0rem;
  }
`;

export const ButtonsGrid = styled(LayoutGrid)`
  gap: 2rem;

  > button {
    grid-column: span 2;

    :first-of-type {
      grid-column: span 4;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    > button {
      grid-column: span 3;

      :first-of-type {
        grid-column: 1 / -1;
      }
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    > button {
      grid-column: span 6;

      :first-of-type {
        grid-column: 1 / -1;
      }
    }
  }
`;

export const ProjectsGrid = styled.div`
  margin: 3rem 0 0;
  display: grid;
  grid-column: 2 / 3;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  border-radius: 0.4rem;
  overflow: hidden;
`;
