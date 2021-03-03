import styled from 'styled-components';

const Container = styled.div<HeadingContainerProps>`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem 0;
  text-align: center;
  color: ${({ theme, appearance }) =>
    theme.colors.gray[appearance === 'primary' ? '_400' : '_000']};

  hr {
    height: 6rem;
    border: 0;
    opacity: 50%;
    border-left: 2px solid
      ${({ theme, appearance }) =>
        theme.colors[appearance][appearance === 'primary' ? '_200' : '_000']};
  }

  h3 {
    margin: 3rem 0 2rem;
  }

  h4 {
  }
`;

export default Container;
