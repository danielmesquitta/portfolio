import React from 'react';

import Container from './styles';

const Button: React.FC<ButtonProps> = ({
  appearance = 'primary',
  size = 'md',
  hasHover = true,
  children,
  as,
  ...rest
}) => (
  <Container as={as as any} {...{ appearance, size, hasHover }} {...rest}>
    {children}
  </Container>
);

export default Button;
