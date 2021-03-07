import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { Button, Project } from '~/components';
import { Heading } from '~/layouts';

import { Section, ButtonsGrid, ProjectsGrid } from './styles';
import { categories, projects } from './data';
import { useScrollState } from '~/hooks';
import { FiGithub } from 'react-icons/fi';

const Portfolio = forwardRef<HTMLElement, any>((props, ref) => {
  const portfolioRef = useRef<HTMLElement>(null);

  const [selectedButton, setSelectedButton] = useState(0);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  const { getScrollPosition, getElementPosition } = useScrollState();

  useEffect(() => {
    if (portfolioRef?.current) {
      window.addEventListener('scroll', () => {
        const elPosition = getElementPosition(portfolioRef.current, 'top');
        const scroll = getScrollPosition();
        if (scroll && elPosition && scroll >= elPosition) {
          setIsVisible(true);
          setTimeout(() => {
            setHasShadow(true);
          }, 3000);
        }
      });
      return window.removeEventListener('scroll', () => {});
    }
  }, []);

  const changeFilter = useCallback((index: number) => {
    setSelectedButton(index);
    const filters = ['Back-end', 'Web', 'Mobile', 'Design'];
    console.log(filters);
    if (!index) {
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([filters[index - 1]]);
    }
  }, []);

  useEffect(() => {
    changeFilter(0);
  }, [changeFilter]);

  return (
    <Section {...props} ref={ref}>
      <ButtonsGrid>
        <Heading
          id="portfolio"
          title="Portfólio"
          subTitle="Veja meu trabalho"
          appearance="secondary"
        />
        {categories.map((label, index) => (
          <Button
            key={label}
            appearance="secondary"
            outline={selectedButton !== index}
            hasHover={selectedButton !== index}
            children={label}
            onClick={() => changeFilter(index)}
          />
        ))}
      </ButtonsGrid>
      <ProjectsGrid ref={portfolioRef} hasShadow={hasShadow}>
        {projects.map(
          ({ title, subTitles, tags }, index) =>
            selectedFilters.findIndex((filter) => tags?.includes(filter)) !==
              -1 && (
              <Project
                key={index}
                image={`/portfolio-${index}.png`}
                {...{ title, subTitles, isVisible }}
              />
            )
        )}
      </ProjectsGrid>
      <Button
        appearance="primary"
        outline
        as="a"
        href="https://github.com/danielmesquitta?tab=repositories"
        target="_blank"
        children={
          <>
            Veja mais no meu github
            <FiGithub />
          </>
        }
      />
    </Section>
  );
});

export default Portfolio;
