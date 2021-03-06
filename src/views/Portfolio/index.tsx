import React, { forwardRef, useEffect, useRef, useState } from 'react';

import { Button, Project } from '~/components';
import { Heading } from '~/layouts';

import { Section, ButtonsGrid, ProjectsGrid } from './styles';
import { categories, projects } from './data';
import { useScrollState } from '~/hooks';

const Portfolio = forwardRef<HTMLElement, any>((props, ref) => {
  const portfolioRef = useRef<HTMLElement>(null);

  const [selectedButton, setSelectedButton] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  const { getScrollPosition, getElementPosition } = useScrollState();

  useEffect(() => {
    if (portfolioRef?.current) {
      window.addEventListener('scroll', () => {
        const fathersPosition = getElementPosition(portfolioRef.current, 'top');
        const scroll = getScrollPosition();
        if (scroll && fathersPosition && scroll >= fathersPosition) {
          setIsVisible(true);
          setTimeout(() => {
            setHasShadow(true);
          }, 3000);
        }
      });
      return window.removeEventListener('scroll', () => {});
    }
  }, [getScrollPosition]);

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
      <ProjectsGrid ref={portfolioRef} hasShadow={hasShadow}>
        {projects.map(({ title, subTitles }, index) => (
          <Project
            key={index}
            image={`/portfolio-${index}.png`}
            {...{ title, subTitles, isVisible }}
          />
        ))}
      </ProjectsGrid>
      <Button appearance="primary" outline children="See More" />
    </Section>
  );
});

export default Portfolio;
