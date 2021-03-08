import styled from 'styled-components';

const Container = styled.textarea`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.gray._100}CC;
  color: ${({ theme }) => theme.colors.gray._400};
  border-radius: 0.4rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray._400};
  }
`;

export default Container;
