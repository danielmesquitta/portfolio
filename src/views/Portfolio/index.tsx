import React, { forwardRef, useState } from 'react';

import { Button, Project } from '~/components';
import { Heading } from '~/layouts';

import { Section, ButtonsGrid, ProjectsGrid } from './styles';
import { categories, projects } from './data';

const Portfolio = forwardRef<HTMLElement, any>((props, ref) => {
  const [selectedButton, setSelectedButton] = useState(0);

  return (
    <Section {...props} ref={ref}>
      <ButtonsGrid>
        <Heading
          id="portfolio"
          title="Portfolio"
          subTitle="Check out my work"
          appearance="secondary"
        />
        {categories.map((label, index) => (
          <Button
            key={label}
            appearance="secondary"
            outline={selectedButton !== index}
            hasHover={selectedButton !== index}
            children={label}
            onClick={() => setSelectedButton(index)}
          />
        ))}
      </ButtonsGrid>
      <ProjectsGrid>
        {projects.map(({ title, subTitles }, index) => (
          <Project
            key={index}
            title={title}
            subTitles={subTitles}
            image={`/portfolio-${index}.png`}
          />
        ))}
      </ProjectsGrid>
      <Button appearance="primary" outline children="See More" />
    </Section>
  );
});

export default Portfolio;
