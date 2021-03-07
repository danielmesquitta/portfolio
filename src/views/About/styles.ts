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
  }
`;

export const Grid = styled(GridLayout)`
  > p {
    margin-top: 6rem;
    grid-column: span 6;
    color: ${({ theme }) => theme.colors.gray._300};
  }

  > button {
    position: relative;
    grid-column: 1 / -1;
    margin-right: auto;
    top: -1rem;
    transform: translateY(-100%);
  }

  > img {
    grid-column: span 6;
    margin-top: 6rem;
    width: 60vw;
  }

  ${FeatureBox} {
    margin-top: 12rem;
    grid-column: span 4;
  }
`;
