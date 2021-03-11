import React, { forwardRef, useCallback, useEffect, useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Card } from '~/components';
import { useScreenSize } from '~/hooks';

import data from './data';
import { Section, Grid, Heading } from './styles';

SwiperCore.use([Autoplay, Navigation]);

const Skills = forwardRef<HTMLElement, any>((props, ref) => {
  const { screenSize } = useScreenSize();

  const [slidesPerView, setSlidesPerView] = useState(3);

  const updateSlidesPerView = useCallback(() => {
    switch (screenSize.size) {
      case 'lg':
        return setSlidesPerView(3);
      case 'md':
        return setSlidesPerView(2);
      case 'sm':
        return setSlidesPerView(1);
      default:
        return null;
    }
  }, [screenSize.size]);

  useEffect(() => {
    updateSlidesPerView();
    window.addEventListener('resize', () => updateSlidesPerView());
    return window.removeEventListener('resize', () => null);
  }, [updateSlidesPerView]);

  return (
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
          slidesPerView={slidesPerView}
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
  );
});

export default Skills;
