import React, { forwardRef, useEffect, useRef } from 'react';

import { useField } from '@unform/core';

import Container from './styles';

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, ...rest }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { registerField } = useField(name);

    useEffect(() => {
      registerField({ name, ref: inputRef.current, path: 'value' });
    }, [name, registerField]);

    return <Container {...rest} ref={inputRef} />;
  }
);

export default Input;
