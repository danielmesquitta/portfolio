import React, { useCallback } from 'react';
import { FiBook } from 'react-icons/fi';

import Button from '~/components/Button';
import { useModalState } from '~/hooks';

import { Container, Title, SubTitle } from './styles';

const Project: React.FC<ProjectProps> = ({
  image,
  title,
  subTitles,
  isVisible,
  onClick,
}) => {
  const { setIsVisible } = useModalState();

  const handleModal = useCallback(() => {
    onClick();
    setIsVisible(true);
  }, [setIsVisible, onClick]);

  return (
    <Container isVisible={isVisible}>
      <img src={image} alt="Imagem do portfolio" />
      <div>
        <div>
          <Title>{title}</Title>
          <SubTitle>{subTitles.join(' / ')}</SubTitle>
        </div>
        <Button appearance="primary" size="sm" onClick={handleModal}>
          Saiba mais <FiBook />
        </Button>
      </div>
    </Container>
  );
};

export default Project;
