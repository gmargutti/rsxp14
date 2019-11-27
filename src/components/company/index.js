import React from 'react';

import {
  FaRegBuilding,
  FaAmazon,
  FaInstagram,
  FaFacebook,
} from 'react-icons/fa';

import { Card, Container } from './styles';

export default function Companies({ description, company, link }) {
  const companiesFa = {
    Amazon: () => <FaAmazon fontSize={40} color="#259" />,
    Instagram: () => <FaInstagram fontSize={40} color="#259" />,
    Facebook: () => <FaFacebook fontSize={40} color="#259" />,
    Nubank: () => <FaRegBuilding fontSize={40} color="#259" />,
    Hotmart: () => <FaRegBuilding fontSize={40} color="#259" />,
  };
  console.log(companiesFa[company]);
  return (
    <Container>
      <Card>
        <div className="logo">{companiesFa[company]()}</div>
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
