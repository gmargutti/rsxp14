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
        <h2>
          Oque é ser programador ? Bem pela definição Em ciências da computação;
          programador, desenvolvedor, codificador ou engenheiro de software é
          alguém que escreve, desenvolve ou faz manutenção de software em um
          grande sistema ou alguém que desenvolve software para uso em
          computadores pessoais. Mas na verdade o programador é a pessoa que vai
          mudar o mundo, “sim nós podemos” e devemos ser aqueles que mudam o dia
          o dia da sociedade olha o impacto que teve o aplicativo do uber nubank
          air b&b, whatsApp
        </h2>
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
