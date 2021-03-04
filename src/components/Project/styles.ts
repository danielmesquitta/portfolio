import styled, { css } from 'styled-components';
import { H7, P } from '~/layouts';

export const Container = styled.div`
  position: relative;
  height: 35rem;

  > img {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
  }

  > div {
    text-align: center;
    padding: 6rem 1rem;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    opacity: 0;
    background-color: ${({ theme }) => theme.colors.gray._000}F2;

    ${({ theme }) => {
      const { speed, transitions } = theme.animations;
      return css`
        transition: all ${speed._100} ${transitions.basic};
      `;
    }}

    :hover {
      opacity: 1;
    }
  }
`;

export const Title = styled(H7)``;

export const SubTitle = styled(P)``;
