import React, { forwardRef } from 'react';

import { Input, TextArea } from './styles';

const FormInput = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputProps
>(({ type = 'input', ...rest }, ref) =>
  type === 'input' ? (
    <Input {...rest} ref={ref as React.RefObject<HTMLInputElement>} />
  ) : (
    <TextArea {...rest} ref={ref as React.RefObject<HTMLTextAreaElement>} />
  )
);

export default FormInput;
