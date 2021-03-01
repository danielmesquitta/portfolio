import React from 'react';

import Wrapper from './styles';

const Container: React.FC = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
);

export default Container;
