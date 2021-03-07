import React, { forwardRef } from 'react';
import { FiArrowRightCircle, FiArrowLeftCircle } from 'react-icons/fi';

import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Caption, P } from '~/layouts';

import data from './data';
import { Section, Grid } from './styles';

SwiperCore.use([Autoplay, Navigation]);

const Testimonials = forwardRef<HTMLElement, any>((props, ref) => (
  <Section {...props} ref={ref}>
    <Grid>
      <span>“</span>
      <button className="prev" type="button">
        <FiArrowLeftCircle />
      </button>
      <Swiper
        loop
        navigation={{ prevEl: '.prev', nextEl: '.next' }}
        autoplay={{ delay: 10000 }}
      >
        {data.map(({ author, job, image, content }) => (
          <SwiperSlide key={author}>
            <P key={author}>{content}</P>
            <div>
              <img src={image} alt="avatar" />
              <P>{author}</P>
              <Caption>{job}</Caption>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="next" type="button">
        <FiArrowRightCircle />
      </button>
    </Grid>
    <div />
    <img src="/laptop-background.png" alt="Laptop como imagem de fundo" />
  </Section>
));

export default Testimonials;
