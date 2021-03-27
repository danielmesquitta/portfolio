import React, { forwardRef, useCallback, useRef, useState } from 'react';
import { FiLoader, FiSend } from 'react-icons/fi';
import { toast } from 'react-toastify';

import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import axios from 'axios';
import useTranslation from 'next-translate/useTranslation';

import { Button, Input, TextArea } from '~/components';
import { Heading, SocialLinks } from '~/layouts';

import { Section, Grid } from './styles';

const Contact = forwardRef<HTMLElement, any>((props, ref) => {
  const formRef = useRef<FormHandles>(null);

  const { t } = useTranslation('contact');

  const [loading, setLoading] = useState(false);

  const handleSubmit: SubmitHandler<FormData> = useCallback(
    async (data, { reset }) => {
      setLoading(true);
      const request = {
        from: data.name,
        to: 'danielmesquitta123@gmail.com',
        subject: `E-mail from ${data.email}`,
        text: data.message,
      };
      await axios
        .post('https://danielmesquitta-mail.herokuapp.com', request)
        .then(() => {
          reset();
          toast.success(t`toasts.success`);
        })
        .catch(() => toast.error(t`toasts.error`));
      setLoading(false);
    },
    [t]
  );

  return (
    <Section {...props} ref={ref}>
      <Grid>
        <Heading
          id="contact"
          appearance="secondary"
          title={t`title`}
          subTitle={t`subtitle`}
        />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input required name="name" placeholder={t`inputs.name`} />
          <Input
            required
            name="email"
            placeholder={t`inputs.email`}
            type="email"
          />
          <TextArea required name="message" placeholder={t`inputs.message`} />
          <Button appearance="secondary" outline>
            {loading ? (
              <FiLoader className="loading" />
            ) : (
              <>
                {t`button`} <FiSend />
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
