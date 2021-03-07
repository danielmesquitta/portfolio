import React, { forwardRef } from 'react';
import { FiDownload } from 'react-icons/fi';

import Dots from '../../assets/dots.svg';

import { Heading, P } from '~/layouts';
import { Button, FeatureBox } from '~/components';

import { Section, Grid } from './styles';
import data from './data';

const About = forwardRef<HTMLElement, any>((props, ref) => (
  <Section {...props} ref={ref}>
    <Grid>
      <Heading id="about" title="Sobre mim" subTitle="Quem sou eu?" />
      <P>{data}</P>
      <img src="/about.png" />
      <Button
        appearance="primary"
        children={
          <>
            Baixar currículo
            <FiDownload />
          </>
        }
      />
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
