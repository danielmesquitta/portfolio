import React, { forwardRef } from 'react';

import { useScrollState } from '~/hooks';

import Container from './styles';

const Navbar = forwardRef<HTMLElement, any>((props, ref) => {
  const { currentSection } = useScrollState();

  return (
    <Container {...{ currentSection, ref }} {...props}>
      <nav>
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
      </nav>
    </Container>
  );
});

export default Navbar;
