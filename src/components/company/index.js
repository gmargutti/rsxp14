import React from 'react';

import { FaInstagram } from 'react-icons/fa';

import { Card, Container } from './styles';

export default function Cases({ description, company, link }) {
  return (
    <Container>
      <Card>
        <div className="logo">
          <FaInstagram fontSize={40} color="#259" />
        </div>
        <section>
          <b>{company}</b> {description}
        </section>
        <button>
          <a href={link} target="_black">
            Conheça Mais
          </a>
        </button>
      </Card>
    </Container>
  );
}
