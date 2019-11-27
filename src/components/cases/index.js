import React from 'react';

import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';

import { Case, Container } from './styles';

export default function Cases() {
  return (
    <Container>
      <Case>
        <span>Bill Gates</span>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="icons">
          <FaLinkedin color="#000" fontSize="20px" />
          <FaFacebook color="#000" fontSize="20px" />
          <FaTwitter color="#000" fontSize="20px" />
          <FaYoutube color="#000" fontSize="20px" />
        </div>
      </Case>
    </Container>
  );
}
