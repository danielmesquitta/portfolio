import React from 'react';

import Container from './styles';

const Navbar: React.FC = (props) => (
  <Container>
    <nav>
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
    </nav>
  </Container>
);

export default Navbar;
