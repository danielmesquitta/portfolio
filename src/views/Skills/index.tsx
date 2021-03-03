import React from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Card } from '~/components';
import { Section, Grid, Heading } from './styles';
import data from './data';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

SwiperCore.use([Navigation]);

const Skills = () => (
  <Section>
    <Grid>
      <Heading
        title="Skills"
        subTitle={
          <>
            Making the complex
            <br />
            simple
          </>
        }
      />
      <Swiper
        loop
        spaceBetween={31}
        slidesPerView={3}
        navigation={{ prevEl: '.prev', nextEl: '.next' }}
      >
        {data.map((cardProps) => (
          <SwiperSlide>
            <Card {...cardProps} />
          </SwiperSlide>
        ))}
      </Swiper>
      <FiArrowLeft className="prev" />
      <FiArrowRight className="next" />
    </Grid>
  </Section>
);

export default Skills;
