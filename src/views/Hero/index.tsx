import React, { forwardRef } from 'react';

import useTranslation from 'next-translate/useTranslation';

import { SocialLinks } from '~/layouts';

import Dots from '../../assets/dots.svg';
import { Section, Grid, Title, SubTitle, Circle } from './styles';

const Hero = forwardRef<HTMLElement, any>((props, ref) => {
  const { t } = useTranslation('hero');

  return (
    <Section {...props} {...{ ref }}>
      <Grid>
        <header id="home">
          <Title>{t('title')}</Title>
          <SubTitle>
            <hr /> {t('subtitle')}
          </SubTitle>
        </header>
        <SocialLinks as="aside" vertical />
        <Dots />
      </Grid>
      <Circle size="35vw" top="-10vw" right="-10vw" />
      <Circle size="52vw" bottom="-10vw" left="-10vw" />
    </Section>
  );
});

export default Hero;
