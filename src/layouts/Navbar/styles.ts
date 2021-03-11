import styled, { css } from 'styled-components';

import { hexToRgba } from '~/helpers';
import { Section } from '~/layouts';

const Container = styled(Section)<NavbarContainerProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  z-index: 10;

  ${({ currentSection }) =>
    currentSection > 1 &&
    css`
      box-shadow: 0px 1rem 2rem
        ${({ theme }) => hexToRgba(theme.colors.gray._400, 0.05)};
      background-color: ${({ theme }) => theme.colors.gray._500};
      position: fixed;

      ${({ theme }) => {
        const { slideDown, transitions, speed } = theme.animations;
        return css`
          animation: ${speed._200} ${slideDown} ${transitions.basic};
        `;
      }}

      @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
        padding: 2rem 0;
      }

      > nav {
        margin: 0 !important;

        > a,
        > a:visited {
          color: ${({ theme }) => theme.colors.gray._000};
          opacity: 0.9 !important;

          span {
            opacity: 0.8 !important;
          }
        }

        div a,
        div a:visited {
          color: ${({ theme }) => theme.colors.gray._100};

          :last-of-type {
            background-color: ${({ theme }) =>
              theme.colors.gray._200}26 !important;

            :hover {
              :hover {
                background-color: ${({ theme }) =>
                  theme.colors.gray._000}35 !important;
              }
            }
          }
        }
      }
    `}

  ${({ theme }) => {
    const { fadeIn, speed, transitions } = theme.animations;
    return css`
      animation: ${speed._300} ${fadeIn(0, 1)} ${transitions.basic};
    `;
  }}

  > nav {
    grid-column: 2 / 3;
    margin: 2rem 0;
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > a,
    & > a:visited {
      color: ${({ theme }) => theme.colors.gray._000};
      font-size: 2.4rem;

      span {
        font-weight: ${({ theme }) => theme.typography.weight.regular};
        opacity: 0.7;
      }
    }

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 60rem;

      ${({ theme, isOpen }) => css`
        @media screen and (max-width: ${theme.breakpoints.md}) {
          position: fixed;
          height: 100vh;
          top: 0;
          right: 0;
          flex-direction: column;
          text-align: left;
          justify-content: flex-start;
          align-items: flex-start;
          background-color: ${theme.colors.gray._400};
          padding: 6rem;

          ${() => {
            const { slideLeft, speed, transitions } = theme.animations;
            return css`
              animation: ${speed._200} ${slideLeft} ${transitions.basic};
            `;
          }}

          &::before {
            content: '';
            position: absolute;
            top: 0;
            left: -20vw;
            width: 20vw;
            height: 100%;
            background-color: ${hexToRgba(theme.colors.gray._400, 0.7)};
          }

          a,
          a:visited {
            width: 20rem;
            margin: 2rem 0;
            font-size: 2rem !important;

            &:last-of-type {
              &,
              &:hover {
                height: 6rem;
              }
            }
          }

          ${isOpen
            ? css`
                display: flex;
                width: 80vw;
              `
            : css`
                display: none;
                width: 0;
              `}
        }
      `}

      a,
      a:visited {
        color: ${({ theme }) => theme.colors.gray._000};
        padding: 1.2rem 1rem;
        font-size: 1.6rem;
        opacity: 0.7;

        ${({ theme }) => {
          const { speed, transitions } = theme.animations;
          return css`
            transition: all ${speed._100} ${transitions.basic};
          `;
        }}

        :nth-child(${({ currentSection }) => currentSection}) {
          opacity: 1;
          font-weight: ${({ theme }) =>
            theme.typography.weight.bold} !important;

          :hover {
            opacity: 1;
          }
        }

        :hover {
          opacity: 1;
        }

        &:last-of-type {
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 1;
          padding: 1.2rem 2rem;
          border-radius: 0.4rem;
          background-color: ${({ theme }) =>
            hexToRgba(theme.colors.gray._000, 0.1)};

          :hover {
            background-color: ${({ theme }) =>
              hexToRgba(theme.colors.gray._000, 0.2)};
          }
        }
      }
    }

    > button {
      display: none;
      height: 3rem;
      width: 3rem;

      @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
        display: block;
      }

      > div {
        position: relative;

        &,
        &::before,
        &::after {
          width: 3rem;
          height: 2px;
          background-color: ${({ theme }) => theme.colors.gray._100};
          display: inline-block;

          ${({ theme }) => {
            const { speed, transitions } = theme.animations;
            return css`
              transition: all ${speed._100} ${transitions.basic};
            `;
          }}
        }

        &::before,
        &::after {
          content: '';
          position: absolute;
          left: 0;
          transition: all 0.2s;
        }

        &::before {
          top: -0.9rem;
        }
        &::after {
          top: 0.9rem;
        }
      }

      &:hover > div {
        &::before {
          top: -1rem;
        }
        &::after {
          top: 1rem;
        }
      }

      ${({ isOpen }) =>
        isOpen &&
        css`
          position: fixed;
          top: 3rem;
          right: 3rem;

          & > div,
          &:hover > div {
            background-color: transparent;

            &::before {
              top: 0;
              transform: rotate(135deg);
            }

            &::after {
              top: 0;
              transform: rotate(-135deg);
            }
          }
        `}
    }
  }
`;

export default Container;
