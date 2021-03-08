import React, { forwardRef, useEffect, useRef } from 'react';

import { useField } from '@unform/core';

import Container from './styles';

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ name, ...rest }, ref) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const { registerField } = useField(name);

    useEffect(() => {
      registerField({ name, ref: textareaRef?.current, path: 'value' });
    }, [name, registerField]);

    return <Container {...rest} ref={textareaRef} />;
  }
);

export default TextArea;
