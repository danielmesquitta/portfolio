import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: 7.2rem;
  line-height: 120%;
`;

export const H2 = styled.h2`
  font-size: 2.8rem;
  line-height: 120%;
`;

export const H3 = styled.h3`
  font-size: 1.4rem;
  line-height: 120%;
  letter-spacing: 20%;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.typography.weight.regular};
`;

export const H4 = styled.h4`
  font-size: 4rem;
  line-height: 120%;
  letter-spacing: 10%;
`;

export const H5 = styled.h5`
  font-size: 2.4rem;
  line-height: 120%;
  letter-spacing: 10%;
`;

export const H6 = styled.h6`
  font-size: 4.2rem;
  line-height: 120%;
`;

export const H7 = styled.h6`
  font-size: 3.2rem;
  line-height: 120%;
  letter-spacing: 10%;
`;

export const P = styled.p`
  font-size: 1.6rem;
  line-height: 160%;
  letter-spacing: 5%;
`;

export const Caption = styled.caption`
  font-size: 1.4rem;
  line-height: 120%;
  letter-spacing: 5%;
`;
