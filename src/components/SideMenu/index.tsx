import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const SideMenu: React.FC = () => {
  return (
    <Container>
      <Link to="/">Início</Link>
      <Link to="about">Sobre</Link>
      <a
        href="https://github.com/rafaelsouz/graph-chromatic-number"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
      <a
        href="https://www.linkedin.com/in/rafaelsouz/"
        target="_blank"
        rel="noreferrer"
      >
        Linkedin
      </a>
    </Container>
  );
};

export default SideMenu;
