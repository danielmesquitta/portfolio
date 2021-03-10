/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { forwardRef, useState } from 'react';

import { useScrollState } from '~/hooks';

import Container from './styles';

const Navbar = forwardRef<HTMLElement, any>((props, ref) => {
  const { currentSection } = useScrollState();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container isOpen={isOpen} {...{ currentSection, ref }} {...props}>
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
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          <div />
        </button>
      </nav>
    </Container>
  );
});

export default Navbar;
