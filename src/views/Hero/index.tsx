import React, { forwardRef } from 'react';

import { SocialLinks } from '~/layouts';

import Dots from '../../assets/dots.svg';
import { Section, Grid, Title, SubTitle, Circle } from './styles';

const Hero = forwardRef<HTMLElement, any>((props, ref) => (
  <Section {...props} {...{ ref }}>
    <Grid>
      <header id="home">
        <Title>Olá! Sou Daniel,</Title>
        <SubTitle>
          <hr /> Desenvolvedor Full-stack
        </SubTitle>
      </header>
      <SocialLinks as="aside" vertical />
      <Dots />
    </Grid>
    <Circle size="35vw" top="-10vw" right="-10vw" />
    <Circle size="52vw" bottom="-10vw" left="-10vw" />
  </Section>
));

export default Hero;
