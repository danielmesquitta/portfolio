import React from 'react';

import { Container } from './styles';

const Button: React.FC<ButtonProps> = ({
  appearance = 'primary',
  size = 'md',
  hasHover = true,
  children,
  ...rest
}) => (
  <Container {...{ appearance, size, hasHover }} {...rest}>
    {children}
  </Container>
);

export default Button;
