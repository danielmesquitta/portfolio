import React from 'react';
import { FiBook } from 'react-icons/fi';

import Button from '~/components/Button';
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
          Saiba mais <FiBook />
        </Button>
      </div>
    </Container>
  );
};

export default Project;
