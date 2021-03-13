import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: ${({ theme }) => theme.typography.size.h1 / 10}rem;
  line-height: 1.2;
  letter-spacing: ${({ theme }) => (theme.typography.size.h1 / 10) * 0.05}rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => ((theme.typography.size.h1 / 3) * 2) / 10}rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.size.h1 / 2 / 10}rem;
  }
`;

export const H2 = styled.h2`
  font-size: ${({ theme }) => theme.typography.size.h2 / 10}rem;
  line-height: 1.2;
  letter-spacing: ${({ theme }) => (theme.typography.size.h2 / 10) * 0.05}rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => ((theme.typography.size.h2 / 3) * 2) / 10}rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 16px;
  }
`;

export const H3 = styled.h3`
  font-size: ${({ theme }) => theme.typography.size.h3}px;
  line-height: 1.2;
  letter-spacing: ${({ theme }) => theme.typography.size.h3 * 0.2}px;
  font-weight: ${({ theme }) => theme.typography.weight.regular};
  text-transform: uppercase;
`;

export const H4 = styled.h4`
  font-size: ${({ theme }) => theme.typography.size.h4 / 10}rem;
  line-height: 1.2;
  letter-spacing: ${({ theme }) => (theme.typography.size.h4 / 10) * 0.1}rem;
`;

export const H5 = styled.h5`
  font-size: ${({ theme }) => theme.typography.size.h5 / 10}rem;
  line-height: 1.2;
  letter-spacing: ${({ theme }) => (theme.typography.size.h5 / 10) * 0.1}rem;
`;

export const H6 = styled.h6`
  font-size: ${({ theme }) => theme.typography.size.h6 / 10}rem;
  line-height: 1.2;
  letter-spacing: ${({ theme }) => (theme.typography.size.h6 / 10) * 0}rem;
`;

export const H7 = styled.h6`
  font-size: ${({ theme }) => theme.typography.size.h7 / 10}rem;
  line-height: 1.2;
  letter-spacing: ${({ theme }) => (theme.typography.size.h7 / 10) * 0.1}rem;
`;

export const P = styled.p`
  font-size: ${({ theme }) => theme.typography.size.p}px;
  line-height: 1.6;
  letter-spacing: ${({ theme }) => theme.typography.size.p * 0.05}px;
`;

export const Caption = styled.caption`
  font-size: ${({ theme }) => theme.typography.size.caption}px;
  line-height: 1.4;
  letter-spacing: ${({ theme }) => theme.typography.size.caption * 0.05}px;
`;
