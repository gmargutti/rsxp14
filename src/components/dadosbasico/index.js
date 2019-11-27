import React, { Component } from "react";

class DadosBasico extends Component {
  render() {
    const link = `https://api.whatsapp.com/send?phone=558596496669&text=Preciso de ajuda assesinho`;
    //window.open(link);
    return (
      <div style={{ width: "100%" }}>
        <h1 style={{ fontSize: 15 }}>Contato (85)3025-2726</h1>
        <br></br>
        <a href={link} style={{ color: "#32CD32" }}>
          Segue o link do whatsapp
        </a>
      </div>
    );
  }
}

export default DadosBasico;
