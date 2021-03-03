import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: ${({ theme }) => theme.typography.size.h1 / 10}rem;
  line-height: ${({ theme }) => (theme.typography.size.h1 / 10) * 1.2}rem;
  letter-spacing: ${({ theme }) => (theme.typography.size.h1 / 10) * 0.05}rem; ;
`;

export const H2 = styled.h2`
  font-size: ${({ theme }) => theme.typography.size.h2 / 10}rem;
  line-height: ${({ theme }) => (theme.typography.size.h2 / 10) * 1.2}rem;
  letter-spacing: ${({ theme }) => (theme.typography.size.h2 / 10) * 0.05}rem; ;
`;

export const H3 = styled.h3`
  font-size: ${({ theme }) => theme.typography.size.h3 / 10}rem;
  line-height: ${({ theme }) => (theme.typography.size.h3 / 10) * 1.2}rem;
  letter-spacing: ${({ theme }) => (theme.typography.size.h3 / 10) * 0.2}rem;
  font-weight: ${({ theme }) => theme.typography.weight.regular};
  text-transform: uppercase;
`;

export const H4 = styled.h4`
  font-size: ${({ theme }) => theme.typography.size.h4 / 10}rem;
  line-height: ${({ theme }) => (theme.typography.size.h4 / 10) * 1.2}rem;
  letter-spacing: ${({ theme }) => (theme.typography.size.h4 / 10) * 0.1}rem;
`;

export const H5 = styled.h5`
  font-size: ${({ theme }) => theme.typography.size.h5 / 10}rem;
  line-height: ${({ theme }) => (theme.typography.size.h5 / 10) * 1.2}rem;
  letter-spacing: ${({ theme }) => (theme.typography.size.h5 / 10) * 0.1}rem;
`;

export const H6 = styled.h6`
  font-size: ${({ theme }) => theme.typography.size.h6 / 10}rem;
  line-height: ${({ theme }) => (theme.typography.size.h6 / 10) * 1.2}rem;
  letter-spacing: ${({ theme }) => (theme.typography.size.h6 / 10) * 0}rem;
`;

export const H7 = styled.h6`
  font-size: ${({ theme }) => theme.typography.size.h7 / 10}rem;
  line-height: ${({ theme }) => (theme.typography.size.h7 / 10) * 1.2}rem;
  letter-spacing: ${({ theme }) => (theme.typography.size.h7 / 10) * 0.1}rem;
`;

export const P = styled.p`
  font-size: ${({ theme }) => theme.typography.size.p / 10}rem;
  line-height: ${({ theme }) => (theme.typography.size.p / 10) * 1.6}rem;
  letter-spacing: ${({ theme }) => (theme.typography.size.p / 10) * 0.05}rem;
`;

export const Caption = styled.caption`
  font-size: ${({ theme }) => theme.typography.size.caption / 10}rem;
  line-height: ${({ theme }) => (theme.typography.size.caption / 10) * 1.6}rem;
  letter-spacing: ${({ theme }) =>
    (theme.typography.size.caption / 10) * 0.05}rem;
`;
