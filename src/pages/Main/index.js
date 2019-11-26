import React, { Fragment } from "react";
import SimpleChatForm from "../../components/chatbot";

import { Header, Mission, Cases } from "./styles";

export default function Main() {
  return (
    <Fragment>
      <SimpleChatForm />
      <Header>
        <h1>Por que ser um progamador?</h1>
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
