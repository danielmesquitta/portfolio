import styled, { css } from 'styled-components';

const Container = styled.div`
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.gray._200};
  border-radius: 0.4rem;
  min-height: 35rem;
  padding: 5rem 2rem 2rem;
  margin: 1px;

  ${({ theme }) => {
    const { speed, transitions } = theme.animations;
    return css`
      transition: all ${speed._100} ${transitions.basic};
    `;
  }}

  :hover {
    border: 1px solid ${({ theme }) => theme.colors.primary._200};
  }

  svg {
    display: block;
    height: 6rem;
    width: 6rem;
    stroke-width: 1px;
    margin: 0 auto 2rem;
  }

  h5 {
    margin-bottom: 1rem;
  }
`;

export default Container;
