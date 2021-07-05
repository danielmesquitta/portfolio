import React from 'react';
import { FiXCircle } from 'react-icons/fi';

import { Button } from '~/components';
import { useModalState } from '~/hooks';
import { H7, P } from '~/layouts';

import { Wrapper, Container, Background } from './styles';
import { ModalProps } from './types';

const Modal: React.FC<ModalProps> = ({
  buttons,
  images,
  title,
  content,
  children,
}) => {
  const { isVisible, setIsVisible } = useModalState();

  return (
    isVisible && (
      <Wrapper isVisible={isVisible}>
        <Background onClick={() => setIsVisible(false)} />
        <Container>
          <header>
            <button type="button" onClick={() => setIsVisible(false)}>
              <FiXCircle />
            </button>

            {images.map(({ alt, ...rest }) => (
              <img {...rest} alt={alt} />
            ))}

            {title && <H7>{title}</H7>}
            <hr />
          </header>

          <div>
            {content && <P>{content}</P>}

            {children}
          </div>

          <footer>
            {buttons.map(({ label, ...rest }) => (
              <Button key={String(label)} {...rest}>
                {label}
              </Button>
            ))}
          </footer>
        </Container>
      </Wrapper>
    )
  );
};

export default Modal;
