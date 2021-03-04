import 'swiper/swiper-bundle.min.css';

import React, { useEffect, useRef } from 'react';

import { Hero, Portfolio, Skills, About } from '~/views';
import { Navbar } from '~/layouts';
import { useScrollState } from '~/hooks';

const Home = () => {
  const heroRef = useRef<HTMLElement>();
  const skillsRef = useRef<HTMLElement>();
  const portfolioRef = useRef<HTMLElement>();
  const aboutRef = useRef<HTMLElement>();

  const { setCurrentSection } = useScrollState();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrolled =
        document.body.scrollTop || document.documentElement.scrollTop;
      const heroSectionHeight = heroRef?.current?.clientHeight;
      if (scrolled < heroSectionHeight) return setCurrentSection(1);
      const skillsSectionHeight =
        heroSectionHeight + skillsRef?.current?.clientHeight;
      const portfolioSectionHeight =
        skillsSectionHeight + portfolioRef?.current?.clientHeight;
      const aboutSectionHeight =
        portfolioSectionHeight + aboutRef?.current?.clientHeight;
      if (scrolled >= aboutSectionHeight - 100) return setCurrentSection(5);
      if (scrolled >= portfolioSectionHeight - 100) return setCurrentSection(4);
      if (scrolled >= skillsSectionHeight - 100) return setCurrentSection(3);
      if (scrolled >= heroSectionHeight - 100) return setCurrentSection(2);
    });
    return window.removeEventListener('scroll', () => {});
  }, []);

  return (
    <>
      <Navbar />
      <Hero ref={heroRef} />
      <Skills ref={skillsRef} />
      <Portfolio ref={portfolioRef} />
      <About ref={aboutRef} />
    </>
  );
};

export default Home;
