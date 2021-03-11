import styled from 'styled-components';

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1160px 1fr;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 3rem 1fr 3rem;
  }
`;

export default Container;
