import styled, { css } from 'styled-components';

import { H6 } from '~/layouts';

export const Container = styled.div`
  padding: 2rem 1rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.gray._200};
  min-height: 15rem;
  text-align: center;

  ${({ theme }) => {
    const { speed, transitions } = theme.animations;
    return css`
      transition: all ${speed._100} ${transitions.basic};
    `;
  }}

  :hover {
    border: 1px solid ${({ theme }) => theme.colors.primary._200};
  }
`;

export const Title = styled(H6)`
  color: ${({ theme }) => theme.colors.primary._200};
`;