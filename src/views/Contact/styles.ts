import styled, { css } from 'styled-components';

import { Section as SectionLayout, Grid as GridLayout } from '~/layouts';

export const Section = styled(SectionLayout)`
  padding-top: 6rem;
  background-color: ${({ theme }) => theme.colors.gray._400};
`;

export const Grid = styled(GridLayout)`
  > div:nth-child(2) {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
    max-width: 70rem;
    margin: auto;
    width: 100%;

    input,
    textarea {
      background-color: ${({ theme }) => theme.colors.gray._100}CC;
      color: ${({ theme }) => theme.colors.gray._400};
      border-radius: 0.4rem;

      ::placeholder {
        color: ${({ theme }) => theme.colors.gray._400};
      }
    }

    textarea {
      grid-column: 1 / -1;
      min-height: 16rem;
    }

    button {
      grid-column: 1 / -1;
      margin: 2.5rem 0 0 auto;

      svg {
        width: 2rem;
        height: 2rem;
      }
    }
  }

  footer {
    grid-column: 1 / -1;
    padding: 9rem 0 6rem 0;
    width: 20rem;
    display: flex;
    justify-content: space-between;
    margin: auto;

    a {
      padding: 1rem;
      border: 1px solid ${({ theme }) => theme.colors.gray._100};
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;

      ${({ theme }) => {
        const { speed, transitions } = theme.animations;
        return css`
          transition: all ${speed._100} ${transitions.basic};
        `;
      }}

      &:hover {
        background-color: ${({ theme }) => theme.colors.gray._100};

        svg {
          color: ${({ theme }) => theme.colors.gray._400};
        }
      }

      svg {
        color: ${({ theme }) => theme.colors.gray._100};
        width: 2rem;
        height: 2rem;
      }
    }
  }
`;
