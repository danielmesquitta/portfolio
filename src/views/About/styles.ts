import styled from 'styled-components';

import { Container as FeatureBox } from '~/components/FeatureBox/styles';
import { Section as SectionLayout, Grid as GridLayout } from '~/layouts';

export const Section = styled(SectionLayout)`
  background-color: ${({ theme }) => theme.colors.gray._100};
  padding: 12rem 0;
  position: relative;

  > svg {
    position: absolute;
    top: 35rem;
    left: -14rem;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      opacity: 0.3;
    }
  }
`;

export const Grid = styled(GridLayout)`
  > p {
    margin-top: 6rem;
    grid-column: span 6;
    color: ${({ theme }) => theme.colors.gray._300};

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
      grid-column: 1 / -1;
    }
  }

  > a {
    position: relative;
    grid-column: 1 / -1;
    margin-right: auto;
    top: -1rem;
    transform: translateY(-100%);

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
      grid-column: 1 / -1;
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      margin-bottom: 8rem;
    }
  }

  > img {
    grid-column: span 6;
    margin-top: 6rem;
    width: 60vw;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
      display: flex;
      position: relative;
      width: 70vw;
      left: 50%;
      grid-column: 1 / -1;
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      margin-top: 0;
      transform: translateY(40%);
    }
  }

  ${FeatureBox} {
    margin-top: 12rem;
    grid-column: span 4;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      margin-top: 2rem;
      grid-column: 1 / -1;
    }
  }
`;
