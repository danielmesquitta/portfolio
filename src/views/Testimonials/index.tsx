import React, { forwardRef } from 'react';
import { FiArrowRightCircle, FiArrowLeftCircle } from 'react-icons/fi';

import { Caption, P } from '~/layouts';

import { Section, Grid } from './styles';
import data from './data';

const Testimonials = forwardRef<HTMLElement, any>((props, ref) => {
  return (
    <Section {...props} ref={ref}>
      <Grid>
        <span>“</span>
        {data.map(({ author, job, image, content }) => (
          <>
            <button>
              <FiArrowLeftCircle />
            </button>
            <P key={author}>{content}</P>
            <button>
              <FiArrowRightCircle />
            </button>
            <div>
              <img src={image} alt="avatar" />
              <P>{author}</P>
              <Caption>{job}</Caption>
            </div>
          </>
        ))}
      </Grid>
      <div />
      <img src="/laptop-background.png" />
    </Section>
  );
});

export default Testimonials;
