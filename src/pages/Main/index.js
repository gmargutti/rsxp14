import React, { Fragment } from 'react';
import SimpleChatForm from '../../components/chatbot';

import Company from '../../components/company';
import Job from '../../components/job';
import Case from '../../components/cases';

import jobObject from '../../data/jobs';
import companyObject from '../../data/companys';
import caseObject from '../../data/cases';

import video from '../../video/background.mp4';

import { Header, Jobs, Companys, Cases } from './styles';

export default function Main() {
  return (
    <Fragment>
      <SimpleChatForm />
      <Header>
        {/* <h1>Por que ser um desenvolvedor ?</h1> */}
        <video autoPlay loop muted>
          <source src={video} type="video/mp4"></source>
        </video>
      </Header>
      <Jobs>
        {jobObject.map(job => (
          <Job
            title={job.cargo}
            description={job.description}
            initialPrice={job.salarioInicial}
            finalPrice={job.salarioFinal}
            link={job.urlVaga}
          />
        ))}
      </Jobs>
      <Companys>
        {companyObject.map(company => (
          <Company
            company={company.name}
            description={company.description}
            link={company.link}
          />
        ))}
      </Companys>
      <Cases>
        {caseObject.map(c => (
          <Case name={c.header} description={c.body} />
        ))}
      </Cases>
    </Fragment>
  );
}
