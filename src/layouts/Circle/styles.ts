import styled from 'styled-components';

export default styled.span<CircleProps>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
`;
