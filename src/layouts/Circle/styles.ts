import styled from 'styled-components';

export default styled.span<CircleProps>`
  width: ${({ size }) => `${size / 10}rem`};
  height: ${({ size }) => `${size / 10}rem`};
  border-radius: ${({ size }) => `${size / 10}rem`};
`;
