import React, { forwardRef, useCallback, useRef, useState } from 'react';
import { FiLoader, FiSend } from 'react-icons/fi';
import { toast } from 'react-toastify';

import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import axios from 'axios';

import { Button, Input, TextArea } from '~/components';
import { Heading, SocialLinks } from '~/layouts';

import { Section, Grid } from './styles';

const Contact = forwardRef<HTMLElement, any>((props, ref) => {
  const formRef = useRef<FormHandles>(null);

  const [loading, setLoading] = useState(false);

  const handleSubmit: SubmitHandler<FormData> = useCallback(
    async (data, { reset }) => {
      setLoading(true);
      await axios
        .post('/api/contact', data)
        .then(() => {
          reset();
          toast.success('E-mail enviado com sucesso');
        })
        .catch(() => toast.error('Falha ao enviar email'));
      setLoading(false);
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
          <Input required name="name" placeholder="Nome" />
          <Input required name="email" placeholder="E-mail" type="email" />
          <TextArea required name="message" placeholder="Sua mensagem" />
          <Button appearance="secondary" outline>
            {loading ? (
              <FiLoader className="loading" />
            ) : (
              <>
                Enviar <FiSend />
              </>
            )}
          </Button>
        </Form>
        <SocialLinks as="footer" appearance="secondary" />
      </Grid>
    </Section>
  );
});

export default Contact;
