import React from 'react';
import { FaInstagram } from 'react-icons/fa';

import { Job, Container } from './styles';

export default function Cases({
  title,
  description,
  initialPrice,
  finalPrice,
  link,
}) {
  return (
    <Container>
      <Job>
        <div className="logo">
          <FaInstagram fontSize={40} color="#259" />
        </div>
        <section>{title}</section>
        <p>{description}</p>
        <span>
          {initialPrice} até {finalPrice}
        </span>
        <button>
          <a href={link} target="_black">
            Saiba Mais
          </a>
        </button>
      </Job>
    </Container>
  );
}
