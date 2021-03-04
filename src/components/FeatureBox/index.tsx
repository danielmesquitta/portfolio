import React from 'react';
import { P } from '~/layouts';

import { Container, Title } from './styles';

const FeatureBox: React.FC<FeatureBoxProps> = ({ title, content }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <P>{content}</P>
    </Container>
  );
};

export default FeatureBox;
