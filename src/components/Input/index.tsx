import React, { forwardRef } from 'react';

import { Input, TextArea } from './styles';

const FormInput = forwardRef<any, InputProps>(
  ({ type = 'input', ...rest }, ref) => {
    return type === 'input' ? (
      <Input {...rest} ref={ref} />
    ) : (
      <TextArea {...(rest as any)} ref={ref} />
    );
  }
);

export default FormInput;
