import React, { forwardRef } from 'react';
import { FiDownload } from 'react-icons/fi';

import useTranslation from 'next-translate/useTranslation';

import { Button, FeatureBox } from '~/components';
import { Heading, P } from '~/layouts';

import Dots from '../../assets/dots.svg';
import { Section, Grid } from './styles';

const About = forwardRef<HTMLElement, any>((props, ref) => {
  const { t } = useTranslation('about');

  return (
    <Section {...props} ref={ref}>
      <Grid>
        <Heading id="about" title={t`title`} subTitle={t`subtitle`} />
        <P>
          {t`content.0`}
          <br />
          <br />
          {t`content.1`}
        </P>
        <img src="/about.png" alt={t`img`} />
        <Button appearance="primary">
          {t`button`}
          <FiDownload />
        </Button>
        <FeatureBox finalValue={2} hasPlus content={t`features.0`} />
        <FeatureBox finalValue={1000} hasPlus content={t`features.1`} />
        <FeatureBox finalValue={25} hasPlus content={t`features.2`} />
      </Grid>
      <Dots />
    </Section>
  );
});

export default About;
