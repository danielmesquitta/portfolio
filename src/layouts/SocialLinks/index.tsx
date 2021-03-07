import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

import Container from './styles';

const SocialLinks: React.FC<SocialLinkProps> = ({
  appearance = 'primary',
  ...rest
}) => (
  <Container {...rest} {...{ appearance }}>
    <a
      href="https://github.com/danielmesquitta"
      target="_blank"
      rel="noreferrer"
    >
      <FiGithub />
    </a>
    <a
      href="https://www.linkedin.com/in/danielmesquitta"
      target="_blank"
      rel="noreferrer"
    >
      <FiLinkedin />
    </a>
    <a
      href="mailto:danielmesquitta123@gmail.com"
      target="_blank"
      rel="noreferrer"
    >
      <FiMail />
    </a>
  </Container>
);

export default SocialLinks;
