import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { FiGithub } from 'react-icons/fi';

import useTranslation from 'next-translate/useTranslation';

import { Button, Project } from '~/components';
import Modal from '~/components/Modal';
import { ModalButton } from '~/components/Modal/types';
import { useScrollState, useModalState } from '~/hooks';
import { Heading } from '~/layouts';

import { categories as c, projects as p } from './data';
import { Section, ButtonsGrid, ProjectsGrid } from './styles';

const Portfolio = forwardRef<HTMLElement, any>((props, ref) => {
  const portfolioRef = useRef<HTMLDivElement>(null);

  const [selectedButton, setSelectedButton] = useState(0);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const { getScrollPosition, getElementPosition } = useScrollState();
  const { setData, data } = useModalState();

  const { t } = useTranslation('portfolio');
  const [categories, projects] = useMemo(() => [c(t), p(t)], [t]);

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

  const handleProjectClick = useCallback(
    (title: string) => {
      const index = projects.findIndex((project) => project.title === title);
      const { content, buttons, img } = projects[index];
      setData({
        title,
        content,
        images: [{ src: img, alt: `Foto do projeto ${title}` }],
        buttons: buttons as ModalButton[],
      });
    },
    [projects, setData]
  );

  return (
    <>
      <Section {...props} ref={ref}>
        <ButtonsGrid>
          <Heading
            id="portfolio"
            title={t`title`}
            subTitle={t`subtitle`}
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
            ({ title, subTitles, img, tags }, index) =>
              selectedFilters.findIndex((filter) => tags?.includes(filter)) !==
                -1 && (
                <Project
                  key={`${title}-${selectedButton}`}
                  image={img}
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
          {t`buttons.more`}
          <FiGithub />
        </Button>
      </Section>
      <Modal {...data} />
    </>
  );
});

export default Portfolio;
