import React from 'react';
import { FaInstagram } from 'react-icons/fa';

import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';

import { Case, Container } from './styles';

export default function Cases({ name, description, img }) {
  return (
    <Container>
      <Case>
      <div className="logo">
          {
            img ? <img src={img} width='64' height='64' />
            : <FaInstagram fontSize={40} color="#259" /> 
          }
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
