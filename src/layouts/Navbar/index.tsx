/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { forwardRef, useCallback, useState } from 'react';

import useTranslation from 'next-translate/useTranslation';

import { useScrollState } from '~/hooks';

import Container from './styles';

const Navbar = forwardRef<HTMLElement, any>((props, ref) => {
  const { currentSection } = useScrollState();
  const { t: translation } = useTranslation('components');

  const t = useCallback(
    (query: TemplateStringsArray | string) => translation(`navbar.${query}`),
    [translation]
  );

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container isOpen={isOpen} {...{ currentSection, ref }} {...props}>
      <nav>
        <a href="#home">
          <strong>daniel</strong>
          <span>mesquitta</span>
        </a>
        <div>
          <a href="#home" onClick={() => setIsOpen(false)}>
            {t`links.0`}
          </a>
          <a href="#skills" onClick={() => setIsOpen(false)}>
            {t`links.1`}
          </a>
          <a href="#portfolio" onClick={() => setIsOpen(false)}>
            {t`links.2`}
          </a>
          <a href="#about" onClick={() => setIsOpen(false)}>
            {t`links.3`}
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            {t`links.4`}
          </a>
        </div>
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          <div />
        </button>
      </nav>
    </Container>
  );
});

export default Navbar;
