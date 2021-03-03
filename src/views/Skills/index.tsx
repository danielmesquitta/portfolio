import React from 'react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { withRouter } from 'next/router';

import { Card } from '~/components';
import { Section, Grid, Heading } from './styles';
import data from './data';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

SwiperCore.use([Autoplay, Navigation]);

const Skills: React.FC = () => (
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
        id="skills"
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
);

export default withRouter(Skills);
