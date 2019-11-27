import React, { Component } from "react";

class DadosNenhumLogicaeResolucao extends Component {
  render() {
    const linkone = `https://blog.geekhunter.com.br/como-comecar-em-web-back-end-do-zero/`;
    const linktwo = `https://balta.io/guia`;
    return (
      <div style={{ width: "100%" }}>
        <h1 style={{ fontSize: 15, color: "#000" }}>
          Back End:. O desenvolvedor back end é responsável por criar a parte
          funcional dos sistemas. É mais focado em resolver problemas e criar
          novas funções para o sistema. Na parte de estudo, esse profissional
          foca em linguagens específicas para backend (C#, PHP, Go) e bancos de
          dados (SQL, Postgres, MongoDB)
        </h1>
        <br></br>
        <a href={linkone} style={{ color: "#32CD32" }} target="_black">
          Como começar em web back-end do zero?
        </a>
        <br></br>
        <a href={linktwo} style={{ color: "#32CD32" }} target="_black">
          O que faz um desenvolvedor?
        </a>
      </div>
    );
  }
}

export default DadosNenhumLogicaeResolucao;
