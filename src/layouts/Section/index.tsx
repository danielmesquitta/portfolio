import React, { forwardRef, PropsWithChildren } from 'react';

import Container from './styles';

const Section = forwardRef<HTMLElement>(({ children, ...rest }, ref) => (
  <Container {...rest} {...{ ref }}>
    {children}
  </Container>
));

export default Section;
