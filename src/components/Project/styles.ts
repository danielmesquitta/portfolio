import styled, { css } from 'styled-components';

import { H7, P } from '~/layouts';
import { hexToRgba } from '~/helpers';

export const Container = styled.div<ProjectContainerProps>`
  position: relative;
  height: 35rem;
  box-shadow: 0px 1.5rem 3.5rem
    ${({ theme }) => hexToRgba(theme.colors.gray._400, 0.05)};

  ${({ theme, isVisible }) => {
    const { slideUp, speed, transitions } = theme.animations;
    const gridIds = [];
    for (let id = 1; id <= 10; id++) {
      gridIds.push(id);
    }
    const getSlideSpeed = (id: number, speed: string) =>
      Number(speed.replace('s', '')) * id;
    const getDelay = (id: number) => ((100 / gridIds.length) * id) / 2;
    if (isVisible) {
      return gridIds.map((id) => {
        return css`
          &:nth-child(${id}) {
            animation: ${getSlideSpeed(id, speed._200)}s
              ${slideUp(getDelay(id))} ${transitions.basic};
          }
        `;
      });
    }
    return css`
      opacity: 0;
    `;
  }}

  > img {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
  }

  > div {
    text-align: center;
    padding: 6rem 2rem;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    opacity: 0;
    background-color: ${({ theme }) => hexToRgba(theme.colors.gray._000, 0.95)};

    ${({ theme }) => {
      const { speed, transitions } = theme.animations;
      return css`
        transition: all ${speed._100} ${transitions.basic};
      `;
    }}

    :hover {
      opacity: 1;
    }

    > button svg {
      transform: rotate(15deg);
    }
  }
`;

export const Title = styled(H7)``;

export const SubTitle = styled(P)`
  color: ${({ theme }) => theme.colors.primary._200};
  margin-top: 0.5rem;
  line-height: 1.4;
`;
