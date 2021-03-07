import React from 'react';

import { useScrollState } from '~/hooks';

import Container from './styles';

const Navbar: React.FC = (props) => {
  const { currentSection } = useScrollState();

  return (
    <Container currentSection={currentSection} {...props}>
      <div>
        <a href="#home">
          <strong>daniel</strong>
          <span>mesquitta</span>
        </a>
        <div>
          <a href="#home">Home</a>
          <a href="#skills">Habilidades</a>
          <a href="#portfolio">Portfólio</a>
          <a href="#about">Sobre</a>
          <a href="#contact">Contate-me</a>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
