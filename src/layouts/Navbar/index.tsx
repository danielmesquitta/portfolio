import React from 'react';
import { useScrollState } from '~/hooks';

import Container from './styles';

const Navbar: React.FC = (props) => {
  const { currentSection } = useScrollState();

  return (
    <Container currentSection={currentSection}>
      <div>
        <a href="#home">
          <strong>daniel</strong>
          <span>mesquitta</span>
        </a>
        <div>
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About</a>
          <a href="#contact">Contact Me</a>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
