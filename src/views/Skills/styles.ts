import styled from 'styled-components';

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
  }

  .prev {
    right: 8rem;
  }
`;

export const Heading = styled(HeadingLayout)`
  margin-bottom: 3rem;
`;
