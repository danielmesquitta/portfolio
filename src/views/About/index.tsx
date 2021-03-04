import React, { forwardRef } from 'react';
import { FiDownload } from 'react-icons/fi';

import Dots from '../../assets/dots.svg';

import { Heading, P } from '~/layouts';
import { Button } from '~/components';

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
    </Grid>
    <Dots />
  </Section>
));

export default About;
