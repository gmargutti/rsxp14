import React, { Component } from "react";

class DadosCursos extends Component {
  render() {
    const linkone = `https://www.treinaweb.com.br/cursos-online/categoria/desenvolvimento-back-end`;
    const linktwo = `https://www.caelum.com.br/formacao-frontend`;
    const linktree = `https://rocketseat.com.br/starter`;
    return (
      <div style={{ width: "100%" }}>
        <h1 style={{ fontSize: 15, color: "#000" }}>
          Sugestões abaixo de cursos
        </h1>
        <br></br>
        <a href={linkone} target="_black">
          Cursos BACK-END
        </a>
        <br></br>
        <a href={linktwo} target="_black">
          Cursos FRONT-END
        </a>
        <br></br>
        <a href={linktree} target="_black">
          Cursos PARA SEGUIR UMA STACK
        </a>
      </div>
    );
  }
}

export default DadosCursos;
