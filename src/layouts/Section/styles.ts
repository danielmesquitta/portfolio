import styled from 'styled-components';

export default styled.section`
  display: grid;
  grid-template-columns: ${({ theme }) => theme.grid.wrapper};
`;
