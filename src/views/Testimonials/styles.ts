import styled, { css } from 'styled-components';

import { hexToRgba } from '~/helpers';
import { Section as SectionLayout, Grid as GridLayout } from '~/layouts';

export const Section = styled(SectionLayout)`
  position: relative;
  background-color: ${({ theme }) => theme.colors.gray._400};
  overflow: hidden;
  min-height: 50rem;

  > div:nth-child(2),
  > img {
    grid-column: 1 / -1;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  > div:nth-child(2) {
    background: linear-gradient(
      to bottom,
      ${({ theme }) => hexToRgba(theme.colors.gray._400, 0)} 0%,
      ${({ theme }) => hexToRgba(theme.colors.gray._400, 1)} 100%
    );
    z-index: 1;
  }

  > img {
    top: unset;
    object-fit: cover;
    opacity: 0.6;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    min-height: 65rem;
  }
`;

export const Grid = styled(GridLayout)`
  position: relative;
  z-index: 2;
  color: ${({ theme }) => theme.colors.gray._100};
  padding: 0 0 9rem;
  text-align: center;

  > span {
    grid-column: 1 / -1;
    font-size: 12rem;
    height: 0;
    position: relative;
    top: 6rem;
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

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
      display: none;
    }
  }

  .swiper {
    &-container {
      position: relative;
      grid-column: 2 / 12;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
        grid-column: 1 / -1;
      }
    }

    &-slide {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      > p {
        text-align: center;
        max-width: 70rem;
        margin: auto;
      }

      > div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        > img {
          width: 4rem;
          height: 4rem;
          margin: 0 auto 1rem;
          border-radius: 50%;
        }
      }
    }
  }
`;
