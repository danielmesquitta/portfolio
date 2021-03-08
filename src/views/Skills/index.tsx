import React, { forwardRef } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Card } from '~/components';

import data from './data';
import { Section, Grid, Heading } from './styles';

SwiperCore.use([Autoplay, Navigation]);

const Skills = forwardRef<HTMLElement, any>((props, ref) => (
  <Section {...props} ref={ref}>
    <Grid>
      <Heading
        id="skills"
        title="Habilidades"
        subTitle={
          <>
            Transformando complexo
            <br />
            em simples
          </>
        }
      />
      <Swiper
        loop
        spaceBetween={30}
        slidesPerView={3}
        navigation={{ prevEl: '.prev', nextEl: '.next' }}
        autoplay={{ delay: 7000 }}
      >
        {data.map((cardProps) => (
          <SwiperSlide key={cardProps.title}>
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
