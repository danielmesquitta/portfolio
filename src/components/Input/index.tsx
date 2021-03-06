import React, { forwardRef } from 'react';

import { Input, TextArea } from './styles';

const FormInput = forwardRef<any, InputProps>(({ type = 'input', ...rest }) => {
  return type === 'input' ? (
    <Input {...rest} />
  ) : (
    <TextArea {...(rest as any)} />
  );
});

export default FormInput;
