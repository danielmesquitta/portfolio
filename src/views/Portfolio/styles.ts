import styled from 'styled-components';

import { Section as LayoutSection, Grid as LayoutGrid } from '~/layouts';

export const Section = styled(LayoutSection)`
  background-color: ${({ theme }) => theme.colors.gray._400};
`;

export const Grid = styled(LayoutGrid)``;
