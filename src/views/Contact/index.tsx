import React from 'react';
import { FiSend } from 'react-icons/fi';

import { Button, Input } from '~/components';
import { Heading, SocialLinks } from '~/layouts';

import { Section, Grid } from './styles';

const Contact: React.FC = () => (
  <Section>
    <Grid>
      <Heading
        id="contact"
        appearance="secondary"
        title="Contate-me"
        subTitle="Quer conversar?"
      />
      <div>
        <Input name="name" placeholder="Nome" />
        <Input name="email" placeholder="E-mail" />
        <Input name="message" placeholder="Sua mensagem" type="textarea" />
        <Button appearance="secondary" outline>
          Enviar <FiSend />
        </Button>
      </div>
      <SocialLinks as="footer" appearance="secondary" />
    </Grid>
  </Section>
);

export default Contact;
