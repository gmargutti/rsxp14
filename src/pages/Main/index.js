import React, { Fragment } from 'react';

import Chatbot from '../../components/chatbot';

import { Header, Mission, Cases } from './styles';
import img from '../../../public/assets/1.png'

export default function Main() {
  return (
    <Fragment>
      <Header>
        <img src={img} />
        <h1>Por que ser um progamador?</h1>
        <Chatbot />
      </Header>
      <Mission>
        <h1>Nossa Missão</h1>
      </Mission>
      <Cases>
        <h1>Cases de Sucesso</h1>
      </Cases>
    </Fragment>
  );
}
