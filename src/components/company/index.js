import React from 'react';

import {
  FaRegBuilding,
  FaAmazon,
  FaInstagram,
  FaFacebook,
  FaAirbnb,
} from 'react-icons/fa';

import { Card, Container } from './styles';

export default function Companies({ description, company, link }) {
  const companiesFa = {
    Amazon: () => <FaAmazon fontSize={40} color="#fafafa" />,
    Instagram: () => <FaInstagram fontSize={40} color="#fafafa" />,
    Facebook: () => <FaFacebook fontSize={40} color="#fafafa" />,
    Airbnb: () => <FaAirbnb fontSize={40} color="#fafafa" />,
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
