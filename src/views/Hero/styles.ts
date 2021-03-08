import styled, { css } from 'styled-components';

import {
  Section as SectionLayout,
  Grid as GridLayout,
  H1,
  H2,
  Circle as CircleLayout,
} from '~/layouts';

export const Section = styled(SectionLayout)`
  min-height: 100vh;
  background: linear-gradient(
    107.15deg,
    ${({ theme }) => theme.colors.primary._200} 0%,
    ${({ theme }) => theme.colors.secondary._300} 100%
  );
  position: relative;
  overflow: hidden;
`;

export const Grid = styled(GridLayout)`
  min-height: 100vh;
  position: relative;

  ${({ theme }) => {
    const { fadeIn, speed, transitions } = theme.animations;
    return css`
      header {
        animation: ${speed._300} ${fadeIn(15, 0.8)} ${transitions.elastic};
      }
      aside {
        ${[1, 2, 3].map(
          (id) => css`
            a:nth-of-type(${id}) {
              animation: ${speed._500} ${fadeIn(id * 20)} ${transitions.rubber};
            }
          `
        )}
      }
    `;
  }}

  header {
    position: relative;
    z-index: 1;
    grid-column: 1 / -1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  > svg:last-of-type {
    position: absolute;
    bottom: -8rem;
    right: 20rem;
    opacity: 0.5;
  }
`;

export const Title = styled(H1)`
  color: ${({ theme }) => theme.colors.gray._000};
  margin-bottom: 2rem;
  position: relative;
`;

export const SubTitle = styled(H2)`
  color: ${({ theme }) => theme.colors.gray._000};
  display: flex;
  align-items: center;

  hr {
    border: 0;
    border-top: 2px solid ${({ theme }) => theme.colors.gray._000};
    width: 5rem;
    margin-right: 2rem;
  }
`;

export const Circle = styled(CircleLayout)`
  position: absolute;
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  top: ${({ top }) => top};
  background-color: ${({ theme }) => theme.colors.secondary._100}0D;
  box-shadow: 0px 1.5rem 3.5rem ${({ theme }) => theme.colors.gray._400}1A;

  ${({ theme }) => {
    const { breathing, transitions } = theme.animations;
    return css`
      animation: 5s ${breathing} ${transitions.basic} infinite;
    `;
  }}
`;
