import React, { Fragment } from 'react';

import Chatbot from '../../components/chatbot';
import Company from '../../components/company';

import { Header, Mission, Companys } from './styles';

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
      <Companys>
        <div className="">
          <Company />
          <Company />
          <Company />
        </div>
        <div className="">
          <Company />
          <Company />
          <Company />
        </div>
        <div className="">
          <Company />
          <Company />
          <Company />
        </div>
      </Companys>
    </Fragment>
  );
}
