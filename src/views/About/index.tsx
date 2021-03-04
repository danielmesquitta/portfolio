import React, { forwardRef } from 'react';
import { FiDownload } from 'react-icons/fi';

import Dots from '../../assets/dots.svg';

import { Heading, P } from '~/layouts';
import { Button, FeatureBox } from '~/components';

import { Section, Grid } from './styles';
import data from './data';

const About = forwardRef<HTMLElement, any>(() => (
  <Section>
    <Grid>
      <Heading id="about" title="About me" subTitle="Who am I?" />
      <P>{data}</P>
      <img src="/about.png" />
      <Button
        appearance="primary"
        children={
          <>
            Download CV
            <FiDownload />
          </>
        }
      />
      <FeatureBox title="2+" content="years coding" />
      <FeatureBox title="1000+" content="Github commits in the last year" />
      <FeatureBox title="54" content="Some other stuff I don’t know yet." />
    </Grid>
    <Dots />
  </Section>
));

export default About;
