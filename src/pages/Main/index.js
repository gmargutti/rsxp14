import React, { Fragment, useState, useEffect } from 'react';
import SimpleChatForm from '../../components/chatbot';

import Company from '../../components/company';
import Job from '../../components/job';
import Case from '../../components/cases';

import jobObject from '../../data/jobs';
import companyObject from '../../data/companys';

import { Header, Jobs, Companys, Cases } from './styles';
import companys from '../../data/companys';

export default function Main() {
  return (
    <Fragment>
      <SimpleChatForm />
      <Header>
        <h1>Por que ser um progamador?</h1>
        <h2>
          <b>O que é ser programador ?</b> Bem pela definição Em ciências da
          computação; programador, desenvolvedor, codificador ou engenheiro de
          software é alguém que escreve, desenvolve ou faz manutenção de
          software em um grande sistema ou alguém que desenvolve software para
          uso em computadores pessoais. Mas na verdade o programador é a pessoa
          que vai mudar o mundo, “sim nós podemos” e devemos ser aqueles que
          mudam o dia o dia da sociedade olha o impacto que teve o aplicativo do
          uber nubank air b&b, whatsApp
        </h2>
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
          <div className="">
            <Company
              company={company.name}
              description={company.description}
              link={company.link}
            />
          </div>
        ))}
      </Companys>
      <Cases>
        <div className="">
          <Case />
          <Case />
        </div>
        <div className="">
          <Case />
          <Case />
        </div>
      </Cases>
    </Fragment>
  );
}
