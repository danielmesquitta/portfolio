import React from 'react';

import { H5, P, SvgGradient } from '~/layouts';

import Container from './styles';

const Card: React.FC<Props> = ({ Icon, title, content, ...rest }) => (
  <>
    <SvgGradient />
    <Container {...rest}>
      <Icon style={{ stroke: 'url(#primary-gradient)' }} />
      <H5>{title}</H5>
      <P>{content}</P>
    </Container>
  </>
);

export default Card;
