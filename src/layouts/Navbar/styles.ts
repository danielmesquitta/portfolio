import styled from 'styled-components';

const Container = styled.nav`
  display: grid;
  grid-template-columns: ${({ theme }) => theme.grid.wrapper};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  z-index: 10;

  nav {
    grid-column: 2 / 3;
    padding: 3rem 0;
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
        padding: 1.2rem 2rem;
        font-size: 1.6rem;

        &:last-of-type {
          background-color: ${({ theme }) => theme.colors.gray._000}12;
          border-radius: 0.4rem;
        }
      }
    }
  }
`;

export default Container;
