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
      <FeatureBox finalValue={2} hasPlus content="years coding" />
      <FeatureBox
        finalValue={1000}
        hasPlus
        content="Github commits in the last year"
      />
      <FeatureBox
        finalValue={54}
        content="Some other stuff I don’t know yet."
      />
    </Grid>
    <Dots />
  </Section>
));

export default About;
