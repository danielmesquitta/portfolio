import React, { useEffect, useRef } from 'react';

import 'swiper/swiper-bundle.min.css';
import { useScrollState } from '~/hooks';
import { Navbar } from '~/layouts';
import { Hero, Portfolio, Skills, About, Testimonials, Contact } from '~/views';

const Home: React.FC = () => {
  const heroRef = useRef<HTMLElement>();
  const skillsRef = useRef<HTMLElement>();
  const portfolioRef = useRef<HTMLElement>();
  const aboutRef = useRef<HTMLElement>();
  const testimonialsRef = useRef<HTMLElement>();

  const { setCurrentSection } = useScrollState();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const heroSectionHeight = heroRef?.current?.clientHeight;
      if (scroll < heroSectionHeight - 100) return setCurrentSection(1);
      const skillsSectionHeight =
        heroSectionHeight + skillsRef?.current?.clientHeight;
      const portfolioSectionHeight =
        skillsSectionHeight + portfolioRef?.current?.clientHeight;
      const aboutSectionHeight =
        portfolioSectionHeight +
        aboutRef?.current?.clientHeight +
        testimonialsRef?.current?.clientHeight;
      if (scroll >= aboutSectionHeight - 100) return setCurrentSection(5);
      if (scroll >= portfolioSectionHeight - 100) return setCurrentSection(4);
      if (scroll >= skillsSectionHeight - 100) return setCurrentSection(3);
      if (scroll >= heroSectionHeight - 100) return setCurrentSection(2);
      return null;
    });
    return window.removeEventListener('scroll', () => null);
  }, [setCurrentSection]);

  return (
    <>
      <Navbar />
      <Hero ref={heroRef} />
      <Skills ref={skillsRef} />
      <Portfolio ref={portfolioRef} />
      <About ref={aboutRef} />
      <Testimonials ref={testimonialsRef} />
      <Contact />
    </>
  );
};

export default Home;
