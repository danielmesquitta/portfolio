import React, { forwardRef } from 'react';
import { FiDownload } from 'react-icons/fi';

import { Button, FeatureBox } from '~/components';
import { Heading, P } from '~/layouts';

import Dots from '../../assets/dots.svg';
import data from './data';
import { Section, Grid } from './styles';

const About = forwardRef<HTMLElement, any>((props, ref) => (
  <Section {...props} ref={ref}>
    <Grid>
      <Heading id="about" title="Sobre mim" subTitle="Quem sou eu?" />
      <P dangerouslySetInnerHTML={data} />
      <img src="/about.png" alt="Programador refletindo" />
      <Button appearance="primary">
        Baixar currículo
        <FiDownload />
      </Button>
      <FeatureBox finalValue={2} hasPlus content="anos programando" />
      <FeatureBox
        finalValue={1000}
        hasPlus
        content="Github commits no último ano"
      />
      <FeatureBox
        finalValue={4000}
        hasPlus
        content="Horas trabalhando com programação."
      />
    </Grid>
    <Dots />
  </Section>
));

export default About;
