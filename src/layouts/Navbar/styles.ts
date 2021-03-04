import styled, { css } from 'styled-components';

const Container = styled.nav<NavbarContainerProps>`
  display: grid;
  grid-template-columns: ${({ theme }) => theme.grid.wrapper};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  z-index: 10;

  ${({ currentSection }) =>
    currentSection > 1 &&
    css`
      box-shadow: 0px 1rem 2rem ${({ theme }) => theme.colors.gray._400}0D;
      background-color: ${({ theme }) => theme.colors.gray._500};
      position: fixed;

      > div {
        margin: 0 !important;

        > a,
        > a:visited {
          color: ${({ theme }) => theme.colors.gray._100};
          opacity: 0.8 !important;

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

  > div {
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

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 60rem;

      a,
      a:visited {
        color: ${({ theme }) => theme.colors.gray._000};
        padding: 1.2rem 1rem;
        font-size: 1.6rem;
        opacity: 0.7;
        transition: all 0.4s;

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
          opacity: 1;
          padding: 1.2rem 2rem;
          border-radius: 0.4rem;
          background-color: ${({ theme }) => theme.colors.gray._000}12;

          :hover {
            background-color: ${({ theme }) => theme.colors.gray._000}24;
          }
        }
      }
    }
  }
`;

export default Container;
