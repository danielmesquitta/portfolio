import React, { forwardRef, useCallback, useRef } from 'react';
import { FiSend } from 'react-icons/fi';

import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';

import { Button, Input, TextArea } from '~/components';
import { Heading, SocialLinks } from '~/layouts';

import { Section, Grid } from './styles';

const Contact = forwardRef<HTMLElement, any>((props, ref) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = useCallback(
    (data, { reset }) => {
      console.log(data);
      reset();
    },
    []
  );

  return (
    <Section {...props} ref={ref}>
      <Grid>
        <Heading
          id="contact"
          appearance="secondary"
          title="Contate-me"
          subTitle="Quer conversar?"
        />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" placeholder="Nome" />
          <Input name="email" placeholder="E-mail" type="email" />
          <TextArea name="message" placeholder="Sua mensagem" />
          <Button appearance="secondary" outline>
            Enviar <FiSend />
          </Button>
        </Form>
        <SocialLinks as="footer" appearance="secondary" />
      </Grid>
    </Section>
  );
});

export default Contact;
