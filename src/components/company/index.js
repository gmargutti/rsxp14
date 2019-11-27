import React from 'react';

import { FaRegBuilding } from 'react-icons/fa';

import { Card, Container } from './styles';

export default function Cases({ description, company, link }) {
  return (
    <Container>
      <Card>
        <div className="logo">
          <FaRegBuilding fontSize={40} color="#fafafa" />
        </div>
        <p>
          <b>{company}</b> {description}
        </p>
        <button>
          <a href={link} target="_black">
            Conheça Mais
          </a>
        </button>
      </Card>
    </Container>
  );
}
