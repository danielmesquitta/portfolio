import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { FiGithub } from 'react-icons/fi';

import { Button, Project } from '~/components';
import Modal from '~/components/Modal';
import { useScrollState, useModalState } from '~/hooks';
import { H7, Heading, P } from '~/layouts';

import { categories, projects } from './data';
import { Section, ButtonsGrid, ProjectsGrid } from './styles';

const Portfolio = forwardRef<HTMLElement, any>((props, ref) => {
  const portfolioRef = useRef<HTMLDivElement>(null);

  const [selectedButton, setSelectedButton] = useState(0);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const { getScrollPosition, getElementPosition } = useScrollState();
  const { setData, data } = useModalState();

  useEffect(() => {
    if (portfolioRef?.current) {
      window.addEventListener('scroll', () => {
        const elPosition = getElementPosition(portfolioRef.current, 'top');
        const scroll = getScrollPosition();
        if (scroll && elPosition && scroll >= elPosition) {
          setIsVisible(true);
        }
      });
      return window.removeEventListener('scroll', () => null);
    }
    return null;
  }, [getElementPosition, getScrollPosition]);

  const filters = useMemo(() => {
    const response = [...categories];
    response.splice(0, 1);
    return response;
  }, []);

  const changeFilter = useCallback(
    (index: number) => {
      setSelectedButton(index);
      if (!index) {
        setSelectedFilters(filters);
      } else {
        setSelectedFilters([filters[index - 1]]);
      }
    },
    [filters]
  );

  useEffect(() => {
    changeFilter(0);
  }, [changeFilter]);

  const handleProjectClick = useCallback((title: string) => {
    const index = projects.findIndex((project) => project.title === title);
    const { content } = projects[index];
    setData({
      title,
      content,
      images: [
        { src: `/portfolio-${index}.png`, alt: `Foto do projeto ${title}` },
      ],
      buttons: [
        {
          label: 'Ir para o site',
          appearance: 'primary',
          hasHover: false,
        },
        {
          label: (
            <>
              Ver no github <FiGithub />
            </>
          ),
          appearance: 'primary',
          outline: true,
          hasHover: false,
        },
      ],
    });
  }, []);

  return (
    <>
      <Section {...props} ref={ref}>
        <ButtonsGrid>
          <Heading
            id="portfolio"
            title="Portfólio"
            subTitle="Conheça meu trabalho"
            appearance="secondary"
          />
          {categories.map((label, index) => (
            <Button
              key={label}
              appearance="secondary"
              outline={selectedButton !== index}
              hasHover={selectedButton !== index}
              onClick={() => changeFilter(index)}
            >
              {label}
            </Button>
          ))}
        </ButtonsGrid>
        <ProjectsGrid ref={portfolioRef}>
          {projects.map(
            ({ title, subTitles, tags }, index) =>
              selectedFilters.findIndex((filter) => tags?.includes(filter)) !==
                -1 && (
                <Project
                  key={`${title}-${selectedButton}`}
                  image={`/portfolio-${index}.png`}
                  {...{ title, subTitles, isVisible }}
                  onClick={() => handleProjectClick(title)}
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
          rel="noreferrer"
        >
          Veja mais no meu github
          <FiGithub />
        </Button>
      </Section>
      <Modal {...data} />
    </>
  );
});

export default Portfolio;
