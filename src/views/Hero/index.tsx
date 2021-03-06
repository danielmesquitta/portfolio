import React, { forwardRef } from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SocialLinks } from '~/layouts';

import Dots from '../../assets/dots.svg';
import { Section, Grid, Title, SubTitle, Circle } from './styles';

const Hero = forwardRef<HTMLElement, any>((props, ref) => {
  return (
    <Section {...props} {...{ ref }}>
      <Grid>
        <header id="home">
          <Title>Hello, This is Daniel</Title>
          <SubTitle>
            <hr /> Full-stack Developer
          </SubTitle>
        </header>
        <SocialLinks as="aside" vertical />
        <Dots />
      </Grid>
      <Circle size={800} bottom="-12rem" left="-13rem" />
      <Circle size={600} top="-19rem" right="-12rem" />
    </Section>
  );
});

export default Hero;
