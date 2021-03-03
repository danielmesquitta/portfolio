import styled from 'styled-components';

export default styled.div`
  grid-column: 2 / 3;
  display: grid;
  column-gap: 3rem;
  grid-template-columns: ${({ theme }) => theme.grid.container};
`;
