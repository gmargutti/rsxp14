import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const configBot = {
  width: "500px",
  height: "600px",
  floating: true,
  botDelay: 1000,
  headerTitle: "",
  recognitionLang: "Pt-br",
  botAvatar: ""
};

//Palhetas do bot
const theme = {
  background: "#f5f8fb",
  fontFamily: "Arial, Helvetica, sans-serif",
  headerBgColor: "#333",
  headerFontColor: "#fff",
  headerFontSize: "17px",
  botBubbleColor: "#333",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a"
};

class SimpleChatForm extends Component {
  componentDidMount() {
    // this.handleEnd = this.handleEnd.bind(this);
  }

  // handleEnd({ _, values }) {
  //   //const site = `https://www.${values[3]}${values[2]}.ce.gov.br/pesquisa.php`;
  //   //window.open(site);

  //   const message = `Olá temos um pedido de ${values[0]} do municipio ${values[2]} de ${values[1]}, número de telefone é ${values[3]}`;

  //   client.sms.enviar(values[3], message).then(() => {
  //     console.log("Deu bom o sms");
  //   });

  //   alert(`Volte sempre ${values[0]}, assesi agradece!`);
  //   // values = [];
  //   //  window.location.reload();
  // }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <ChatBot
          handleEnd={this.handleEnd}
          speechSynthesis={{ enable: true, lang: "PT-br" }}
          steps={[
            // Bem vindo entrada
            {
              id: "welcome",
              message:
                "Olá meu nome é ... estou muito feliz em lhe ajudar 😍.Qual o seu nome?",
              trigger: "nome"
            },
            {
              id: "nome",
              message:
                "Olá meu nome é ... estou muito feliz em lhe ajudar 😍.Qual o seu nome?",
              end: true
            }
          ]}
          placeholder="Digite aqui..."
          {...configBot}
        />
      </ThemeProvider>
    );
  }
}

export default SimpleChatForm;
