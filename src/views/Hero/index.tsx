import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

import Dots from '../../assets/dots.svg';
import { Section, Grid, Title, SubTitle, Circle } from './styles';

const Hero = () => {
  return (
    <Section>
      <Grid>
        <main>
          <Title>Hello, This is Daniel</Title>
          <SubTitle>
            <hr /> Full-stack Developer
          </SubTitle>
        </main>
        <aside>
          <a>
            <FiGithub />
          </a>
          <a>
            <FiLinkedin />
          </a>
          <a>
            <FiMail />
          </a>
        </aside>
        <Dots />
      </Grid>
      <Circle size={800} bottom="-12rem" left="-13rem" />
      <Circle size={600} top="-19rem" right="-12rem" />
    </Section>
  );
};

export default Hero;
