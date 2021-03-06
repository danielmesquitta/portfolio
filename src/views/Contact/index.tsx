import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi';

import { Section, Grid } from './styles';
import { Heading } from '~/layouts';
import { Button, Input } from '~/components';

const Contact: React.FC = () => {
  return (
    <Section>
      <Grid>
        <Heading
          id="contact"
          appearance="secondary"
          title="Contact me"
          subTitle="Want to talk?"
        />
        <div>
          <Input name="name" placeholder="Name" />
          <Input name="email" placeholder="E-mail" />
          <Input name="message" placeholder="Your message" type="textarea" />
          <Button appearance="secondary" outline>
            Send <FiSend />
          </Button>
        </div>
        <footer>
          <a>
            <FiGithub />
          </a>
          <a>
            <FiLinkedin />
          </a>
          <a>
            <FiMail />
          </a>
        </footer>
      </Grid>
    </Section>
  );
};

export default Contact;
