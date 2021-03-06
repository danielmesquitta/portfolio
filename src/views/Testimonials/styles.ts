import styled, { css } from 'styled-components';

import { Section as SectionLayout, Grid as GridLayout } from '~/layouts';

export const Section = styled(SectionLayout)`
  position: relative;
  background-color: ${({ theme }) => theme.colors.gray._400};
  overflow: hidden;
  min-height: 60rem;

  > div:nth-child(2),
  > img {
    grid-column: 1 / -1;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  > div:nth-child(2) {
    background: linear-gradient(
      to bottom,
      ${({ theme }) => `${theme.colors.gray._400}00`} 0%,
      ${({ theme }) => `${theme.colors.gray._400}FF`} 100%
    );
    z-index: 1;
  }

  > img {
    top: unset;
    object-fit: cover;
    opacity: 0.6;
  }
`;

export const Grid = styled(GridLayout)`
  position: relative;
  z-index: 2;
  color: ${({ theme }) => theme.colors.gray._100};
  padding: 9rem 0;
  text-align: center;

  > span {
    grid-column: 1 / -1;
    font-size: 12rem;
    line-height: 0.8;
    font-weight: ${({ theme }) => theme.typography.weight.black};
  }

  > button {
    border: 0;
    background: transparent;

    svg {
      color: ${({ theme }) => theme.colors.gray._100};
      width: 5rem;
      height: 5rem;
      stroke-width: 1px;

      ${({ theme }) => {
        const { speed, transitions } = theme.animations;
        return css`
          transition: all ${speed._100} ${transitions.basic};
        `;
      }}

      :hover {
        transform: scale(1.1);
        color: ${({ theme }) => theme.colors.gray._400};
        fill: ${({ theme }) => theme.colors.gray._100};
      }
    }
  }

  > p {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto auto 3rem auto;
    grid-column: 2 / 12;
    max-width: 70rem;
  }

  > div {
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    > img {
      width: 4rem;
      height: 4rem;
      margin: auto;
      border-radius: 50%;
      position: relative;
      top: 1rem;
    }
  }
`;
