import React, { Fragment } from 'react';

import Chatbot from '../../components/chatbot';
import Case from '../../components/cases';

import { Header, Mission, Cases } from './styles';

export default function Main() {
  return (
    <Fragment>
      <Header>
        <h1>Por que ser um progamador?</h1>
        <Chatbot />
      </Header>
      <Mission>
        <h1>Nossa Missão</h1>
      </Mission>
      <Cases>
        <div className="">
          <Case />
          <Case />
          <Case />
        </div>
        <div className="">
          <Case />
          <Case />
          <Case />
        </div>
        <div className="">
          <Case />
          <Case />
          <Case />
        </div>
      </Cases>
    </Fragment>
  );
}
