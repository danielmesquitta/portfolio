import React, { useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import Button from '../Button';

import { Container, Title, SubTitle } from './styles';

const Project: React.FC<ProjectProps> = ({
  image,
  title,
  subTitles,
  isVisible,
}) => {
  return (
    <Container isVisible={isVisible}>
      <img src={image} alt="" />
      <div>
        <div>
          <Title>{title}</Title>
          <SubTitle>{subTitles.join(' / ')}</SubTitle>
        </div>
        <Button appearance="primary" size="sm">
          View <FiArrowRight />
        </Button>
      </div>
    </Container>
  );
};

export default Project;
