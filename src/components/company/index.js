import React from 'react';
import { FaInstagram } from 'react-icons/fa';

import { Card, Container } from './styles';

export default function Cases() {
  return (
    <Container>
      <Card>
        <div className="logo">
          <FaInstagram fontSize={40} color="#259" />
        </div>
        <title>Instagram</title>
        <section>
          Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore
          te sed. Elitr scripta ocurreret qui ad.
        </section>
        <button>
          <a href="/" target="_black">
            Conheça Mais
          </a>
        </button>
      </Card>
    </Container>
  );
}
