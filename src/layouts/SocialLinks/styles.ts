import styled, { css } from 'styled-components';

const Container = styled.div<SocialLinkProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;

  ${({ vertical }) =>
    vertical
      ? css`
          position: absolute;
          z-index: 1;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
          height: 20rem;
          flex-direction: column;
        `
      : css`
          grid-column: 1 / -1;
          width: 20rem;
        `}

  a {
    padding: 1rem;
    border: 1px solid ${({ theme }) => theme.colors.gray._100};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    ${({ theme }) => {
      const { speed, transitions } = theme.animations;
      return css`
        transition: all ${speed._100} ${transitions.basic};
      `;
    }}

    &:hover {
      background-color: ${({ theme }) => theme.colors.gray._100};

      svg {
        color: ${({ theme, appearance }) =>
          appearance === 'primary'
            ? theme.colors.primary._100
            : theme.colors.gray._400};
      }
    }

    svg {
      color: ${({ theme }) => theme.colors.gray._100};
      width: 2rem;
      height: 2rem;
    }
  }
`;

export default Container;
