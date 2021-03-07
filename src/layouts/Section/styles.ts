import styled from 'styled-components';

const Container = styled.section`
  display: grid;
  grid-template-columns: ${({ theme }) => theme.grid.wrapper};
`;

export default Container;
