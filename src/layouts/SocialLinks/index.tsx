import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

import { Container } from './styles';

const SocialLinks: React.FC<SocialLinkProps> = ({
  appearance = 'primary',
  ...rest
}) => {
  return (
    <Container {...rest} {...{ appearance }}>
      <a href="https://github.com/danielmesquitta" target="_blank">
        <FiGithub />
      </a>
      <a href="https://www.linkedin.com/in/danielmesquitta" target="_blank">
        <FiLinkedin />
      </a>
      <a href="mailto:danielmesquitta123@gmail.com" target="_blank">
        <FiMail />
      </a>
    </Container>
  );
};

export default SocialLinks;
