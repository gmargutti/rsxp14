import React, { Component } from "react";

class DadosNenhumArtesVisuais extends Component {
  render() {
    const linkone = `https://www.devmedia.com.br/html-basico-codigos-html/16596`;
    const linktwo = `https://developer.mozilla.org/pt-BR/docs/Aprender/Getting_started_with_the_web/CSS_basico`;
    return (
      <div style={{ width: "100%" }}>
        <h1 style={{ fontSize: 15, color: "#000" }}>
          Front End:. O desenvolvedor front-end é responsável por “dar vida” à
          interface. Trabalha com a parte da aplicação que interage diretamente
          com o usuário. Por isso, é importante que esse desenvolvedor também se
          preocupe com a experiência do usuário. Na parte de estudo, este
          profissional foca em HTML (linguagem de marcação), CSS (linguagem de
          estilo) e JavaScript (linguagem de script/programação).
        </h1>
        <br></br>
        <a href={linkone} target="_black">
          HTML básico - códigos HTML
        </a>
        <br></br>
        <a href={linktwo} target="_black">
          Então, o que realmente é CSS?
        </a>
      </div>
    );
  }
}

export default DadosNenhumArtesVisuais;
