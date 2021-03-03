import React from 'react';

import { Hero, Skills } from '~/views';
import { Navbar } from '~/layouts';
import 'swiper/swiper-bundle.min.css';

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <Skills />
  </>
);

export default Home;
