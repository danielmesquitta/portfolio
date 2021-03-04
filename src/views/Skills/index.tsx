import React, { forwardRef } from 'react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Card } from '~/components';
import { Section, Grid, Heading } from './styles';
import data from './data';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

SwiperCore.use([Autoplay, Navigation]);

const Skills = forwardRef<HTMLElement, any>((props, ref) => (
  <Section {...props} ref={ref}>
    <Grid>
      <Heading
        id="skills"
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
        spaceBetween={30}
        slidesPerView={3}
        navigation={{ prevEl: '.prev', nextEl: '.next' }}
        autoplay={{ delay: 5000 }}
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
));

export default Skills;
