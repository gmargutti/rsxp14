import React, { Fragment } from 'react';

import Chatbot from '../../components/chatbot';
import Company from '../../components/company';
import Job from '../../components/job';

import { Header, Jobs, Companys } from './styles';

export default function Main() {
  return (
    <Fragment>
      <Header>
        <h1>Por que ser um progamador?</h1>
        <Chatbot />
      </Header>
      <Jobs>
        <div className="">
          <Job />
          <Job />
          <Job />
        </div>
        <div className="">
          <Job />
          <Job />
          <Job />
        </div>
        <div className="">
          <Job />
          <Job />
          <Job />
        </div>
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
        <div className="">
          <Company />
          <Company />
          <Company />
        </div>
      </Companys>
    </Fragment>
  );
}
