import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';

import { Job, Container } from './styles';

export default function Jobs({
  title,
  description,
  initialPrice,
  finalPrice,
  link,
  img,
}) {
  return (
    <Container>
      <Job>
        <div className="logo">
          <FaShoppingBag fontSize={40} color="#000" />
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
