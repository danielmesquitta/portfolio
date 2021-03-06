import styled, { css } from 'styled-components';

import {
  Section as SectionLayout,
  Grid as GridLayout,
  Heading as HeadingLayout,
} from '~/layouts';

export const Section = styled(SectionLayout)`
  background: ${({ theme }) => theme.colors.gray._100};
  position: relative;
  overflow: hidden;
`;

export const Grid = styled(GridLayout)`
  position: relative;
  padding-bottom: 22rem;

  .swiper {
    &-container {
      grid-column: 1 / -1;
      max-width: 116rem;
      width: 100%;
    }

    &-slide {
    }
  }

  .prev,
  .next {
    position: absolute;
    bottom: 12rem;
    cursor: pointer;
    right: 0;
    width: 4rem;
    height: 4rem;
    color: ${({ theme }) => theme.colors.primary._200};

    ${({ theme }) => {
      const { speed, transitions } = theme.animations;
      return css`
        transition: all ${speed._100} ${transitions.basic};
      `;
    }}

    &:hover {
      transform: scale(1.1);
      color: ${({ theme }) => theme.colors.primary._100};
    }
  }

  .prev {
    right: 7rem;
  }
`;

export const Heading = styled(HeadingLayout)`
  margin-bottom: 3rem;
`;
