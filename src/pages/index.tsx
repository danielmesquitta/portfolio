import 'swiper/swiper-bundle.min.css';

import React, { useEffect, useRef } from 'react';

import { Hero, Portfolio, Skills } from '~/views';
import { Navbar } from '~/layouts';
import { useScrollState } from '~/hooks';

const Home = () => {
  const heroRef = useRef<HTMLElement>();
  const { setIsOnHeroSection } = useScrollState();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrolled =
        document.body.scrollTop || document.documentElement.scrollTop;
      const heroSectionHeight = heroRef?.current.clientHeight;
      if (scrolled >= heroSectionHeight) setIsOnHeroSection(false);
      if (scrolled < heroSectionHeight) setIsOnHeroSection(true);
    });
    return window.removeEventListener('scroll', () => {});
  }, []);

  return (
    <>
      <Navbar />
      <Hero ref={heroRef} />
      <Skills />
      <Portfolio />
    </>
  );
};

export default Home;
