import React, { Component } from "react";

class DadosArtigos extends Component {
  render() {
    const linkone = `https://www.devmedia.com.br/artigos/`;
    const linktwo = `https://www.oficinadanet.com.br/artigos/programacao`;
    return (
      <div style={{ width: "100%" }}>
        <h1 style={{ fontSize: 15, color: "#000" }}>
          Sugestão de artigos abaixo
        </h1>
        <br></br>
        <a href={linkone} target="_black">
          Artigos sobre Tecnologia para Programadores
        </a>
        <br></br>
        <a href={linktwo} target="_black">
          Artigos sobre programação
        </a>
      </div>
    );
  }
}

export default DadosArtigos;
