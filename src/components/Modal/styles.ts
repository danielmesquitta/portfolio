import styled, { css } from 'styled-components';

import { hexToRgba } from '~/helpers';

import { ModalWrapperProps } from './types';

export const Wrapper = styled.div<ModalWrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 15;
`;

export const Background = styled.button`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => hexToRgba(theme.colors.gray._500, 0.5)};
  cursor: default;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gray._100};
  max-width: 70rem;
  width: 100%;
  height: 95vh;
  padding: 2rem;
  border-radius: 0.4rem;

  ${({ theme }) => {
    const { speed, transitions, fadeIn } = theme.animations;
    return css`
      animation: ${speed._200} ${fadeIn(0, 0.95)} ${transitions.rubber};

      > header button {
        transition: all ${speed._100} ${transitions.basic};
      }
    `;
  }}

  >header {
    > button {
      position: absolute;
      top: 0rem;
      right: 0rem;
      background-color: ${({ theme }) => theme.colors.gray._100};
      border-radius: 50%;
      width: 5rem;
      height: 5rem;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover svg {
        opacity: 0.9;
      }

      svg {
        color: ${({ theme }) => theme.colors.gray._100};
        fill: ${({ theme }) => theme.colors.status.error};
        width: 4rem;
        height: 4rem;
        opacity: 0.8;
      }
    }

    h6 {
      padding: 1rem 0;
    }

    > img {
      width: 100%;
      object-fit: cover;
      height: 40vh;
      border-radius: 4px;

      @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        height: 20vh;
      }
    }

    > hr {
      border: 0;
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray._200};
      width: 100%;
    }
  }

  > div {
    flex: 1;
    overflow-y: scroll;
    padding: 2rem 0;

    > p {
      height: 100%;

      a {
        color: ${({ theme }) => theme.colors.primary._100};
        text-decoration: underline;
        transition: all
          ${({ theme }) =>
            `${theme.animations.speed._100} ${theme.animations.transitions.basic}`};

        :hover {
          opacity: 0.8;
        }
      }
    }
  }

  > footer {
    display: flex;
    margin-top: 1rem;

    > button,
    > a {
      margin-right: 2rem;

      @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      }

      &:hover {
        transform: scale(1.05);
      }
    }
  }
`;
