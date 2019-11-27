import React from 'react';
import { FaInstagram } from 'react-icons/fa';

import { FaApple, FaLinux, FaDove, FaLinkedin, FaFacebook, FaTwitter, FaYoutube, FaCandyCane } from 'react-icons/fa';

import { Case, Container } from './styles';
import cases from '../../data/cases';

export default function Cases({ name, description, img }) {
  const casesFa = {
    'Steven Paul': () => (<FaApple fontSize={40} color="#000" />),
    'Linus Torvalds': () => (<FaLinux fontSize={40} color="#000" />),
    'Angry Birds': () => (<FaDove fontSize={40} color="#000" />),
    'Candy Crush': () => (<FaCandyCane fontSize={40} color="#000" />)
  }
  return (
    <Container>
      <Case>
      <div className="logo">
          {casesFa[name]()}
        </div>
        <span>{name}</span>
        <p>{description}</p>
        <div className="icons">
          <FaLinkedin color="#ce2d35" fontSize="20px" />
          <FaFacebook color="#ce2d35" fontSize="20px" />
          <FaTwitter color="#ce2d35" fontSize="20px" />
          <FaYoutube color="#ce2d35" fontSize="20px" />
        </div>
      </Case>
    </Container>
  );
}
