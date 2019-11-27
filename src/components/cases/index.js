import React from 'react';

import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';

import { Case, Container } from './styles';

export default function Cases({ name, description }) {
  return (
    <Container>
      <Case>
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
