import React, { Fragment } from 'react';
import SimpleChatForm from '../../components/chatbot';

import Company from '../../components/company';
import Job from '../../components/job';
import Case from '../../components/cases';

import { Header, Jobs, Companys, Cases } from './styles';

export default function Main() {
  return (
    <Fragment>
      <SimpleChatForm />
      <Header>
        <h1>Por que ser um progamador?</h1>
      </Header>
      <Jobs>
        <Job />
        <Job />
        <Job />
        <Job />
      </Jobs>
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
      </Companys>
      <Cases>
        <Case />
        <Case />
        <Case />
        <Case />
      </Cases>
    </Fragment>
  );
}
