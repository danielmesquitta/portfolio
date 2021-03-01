import React from 'react';

import Container from './styles';

const Section: React.FC = ({ children, ...rest }) => (
  <Container {...rest}>{children}</Container>
);

export default Section;
