import styled from 'styled-components';

const Container = styled.div`
  grid-column: 2 / 3;
  display: grid;
  column-gap: 3rem;
  grid-template-columns: repeat(12, 1fr);
`;

export default Container;
