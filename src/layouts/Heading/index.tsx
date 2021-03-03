import React from 'react';

import { H3, H4 } from '~/layouts';
import Container from './styles';

const Heading: React.FC<HeadingProps> = ({
  title,
  subTitle,
  appearance = 'primary',
  ...rest
}) => (
  <Container {...{ appearance }} {...rest}>
    <hr />
    <H3>{title}</H3>
    <H4>{subTitle}</H4>
  </Container>
);

export default Heading;
