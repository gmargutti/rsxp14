import React from 'react';
import { FaInstagram } from 'react-icons/fa';

import { Job, Container } from './styles';

export default function Cases() {
  return (
    <Container>
      <Job>
        <div className="logo">
          <FaInstagram fontSize={40} color="#259" />
        </div>
        <section>Dev. Fron-end</section>
        <p>
          Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore
          te sed. Elitr scripta ocurreret qui ad.
        </p>
        <span>R$1599,00 até R$6999,00</span>
        <button>
          <a href="/" target="_black">
            Saiba Mais
          </a>
        </button>
      </Job>
    </Container>
  );
}
