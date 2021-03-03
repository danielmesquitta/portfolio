import React from 'react';
import { Heading } from '~/layouts';

import { Section, Grid } from './styles';

const Portfolio: React.FC = () => (
  <Section>
    <Grid>
      <Heading
        id="portfolio"
        title="Portfolio"
        subTitle="Check out my work"
        appearance="secondary"
      />
    </Grid>
  </Section>
);

export default Portfolio;
