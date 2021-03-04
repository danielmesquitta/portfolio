import styled, { css } from 'styled-components';

export const Container = styled.button<ButtonProps>`
  padding: ${({ size }) => (size === 'md' ? '1.4rem 2.5rem' : '0.9rem 2.5rem')};
  border-radius: 4px;
  min-width: 12rem;
  white-space: nowrap;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;

  ${({ theme }) => {
    const { speed, transitions } = theme.animations;
    return css`
      transition: all ${speed._200} ${transitions.basic};
    `;
  }}

  svg {
    position: relative;
    top: 1px;
    margin-left: 0.6rem;
    color: currentColor;
  }

  ${({ theme, appearance, outline, hasHover }) =>
    appearance === 'primary'
      ? css`
          color: ${theme.colors.gray._100};
          background-color: ${theme.colors.primary._100};
          font-weight: ${theme.typography.weight.bold};
          border: 1px solid ${theme.colors.primary._100};

          ${hasHover &&
          css`
            :hover {
              color: ${theme.colors.primary._100};
              background-color: transparent;
              font-weight: ${theme.typography.weight.regular};
              border: 1px solid ${theme.colors.primary._100};
            }
          `}

          ${outline &&
          css`
            color: ${theme.colors.primary._100};
            background-color: transparent;
            font-weight: ${theme.typography.weight.regular};
            border: 1px solid ${theme.colors.primary._100};

            ${hasHover &&
            css`
              :hover {
                color: ${theme.colors.gray._100};
                background-color: ${theme.colors.primary._100};
                font-weight: ${theme.typography.weight.bold};
                border: 1px solid ${theme.colors.primary._100};
              }
            `}
          `}
        `
      : css`
          color: ${theme.colors.gray._400};
          background-color: ${theme.colors.gray._100};
          font-weight: ${theme.typography.weight.bold};
          border: 1px solid ${theme.colors.gray._100};

          ${hasHover &&
          css`
            :hover {
              color: ${theme.colors.gray._100};
              background-color: transparent;
              font-weight: ${theme.typography.weight.regular};
              border: 1px solid ${theme.colors.gray._100};
            }
          `}

          ${outline &&
          css`
            color: ${theme.colors.gray._100};
            background-color: transparent;
            font-weight: ${theme.typography.weight.regular};
            border: 1px solid ${theme.colors.gray._100};

            ${hasHover &&
            css`
              :hover {
                color: ${theme.colors.gray._400};
                background-color: ${theme.colors.gray._100};
                font-weight: ${theme.typography.weight.bold};
                border: 1px solid ${theme.colors.gray._100};
              }
            `}
          `}
        `}
`;
