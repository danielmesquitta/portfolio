import React, { forwardRef } from 'react';

import Wrapper from './styles';

const Container = forwardRef<HTMLDivElement, any>(
  ({ children, ...rest }, ref) => (
    <Wrapper {...rest} ref={ref}>
      {children}
    </Wrapper>
  )
);

export default Container;
