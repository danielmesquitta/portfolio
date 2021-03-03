import React, { forwardRef } from 'react';

import Container from './styles';

const Section = forwardRef<HTMLElement, any>(({ children, ...rest }, ref) => (
  <Container {...rest} {...{ ref }}>
    {children}
  </Container>
));

export default Section;
