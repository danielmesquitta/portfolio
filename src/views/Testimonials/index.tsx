import React, { forwardRef } from 'react';
import { FiArrowRightCircle, FiArrowLeftCircle } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';

import { Caption, P } from '~/layouts';
import { Section, Grid } from './styles';
import data from './data';

SwiperCore.use([Autoplay, Navigation]);

const Testimonials = forwardRef<HTMLElement, any>((props, ref) => {
  return (
    <Section {...props} ref={ref}>
      <Grid>
        <span>“</span>
        <button className="prev">
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
        <button className="next">
          <FiArrowRightCircle />
        </button>
      </Grid>
      <div />
      <img src="/laptop-background.png" />
    </Section>
  );
});

export default Testimonials;
