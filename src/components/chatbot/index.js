import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

import DadosNenhumArtesVisuais from "../dadosnenhumartesvisuais/index";
import DadosNenhumLogicaeResolucao from "../dadosnenhumlogicaeresolucao/index";

const configBot = {
  width: "500px",
  height: "600px",
  floating: true,
  botDelay: 1000,
  headerTitle: "",
  recognitionLang: "Pt-br",
  botAvatar: "https://media2.giphy.com/media/3eP3Vo0fcJBOqPFnjt/source.gif"
};

//Palhetas do bot
const theme = {
  background: "#f5f8fb",
  fontFamily: "Arial, Helvetica, sans-serif",
  headerBgColor: "#1B998F",
  headerFontColor: "#fff",
  headerFontSize: "17px",
  botBubbleColor: "#1B998F",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#000"
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
            {
              id: "bemvindo",
              message:
                "Olá meu nome é ... estou muito feliz em lhe ajudar 😍.Qual o seu nome?",
              trigger: "nome"
            },
            {
              id: "nome",
              user: true,
              trigger: "respostanome"
            },
            // {
            //   id: "respostanome",
            //   message: "Olá {previousValue} qual a sua idade?",
            //   trigger: "idade"
            // },

            // {
            //   id: "idade",
            //   user: true,
            //   trigger: "respostaidade",
            //   validator: value => {
            //     if (isNaN(value)) {
            //       return "Valor deve ser um número";
            //     } else if (value <= 0) {
            //       return "Valor deve ser positivo";
            //     } else if (value > 122) {
            //       return `${value}? Você não me engana haha`;
            //     }
            //     return true;
            //   }
            // },
            {
              id: "respostanome",
              message: "Qual seu telefone? (Ex:. 85999517039) ",
              trigger: "telefone"
            },
            {
              id: "telefone",
              user: true,
              trigger: "respostatelefone"
            },
            {
              id: "respostatelefone",
              message: "Qual seu email? (Ex:. robo@gmail.com) ",
              trigger: "email"
            },
            {
              id: "email",
              user: true,
              trigger: "respostatemail"
            },
            {
              id: "respostatemail",
              message: "Qual o seu conhecimento na área de programação?",
              trigger: "conhecimento"
            },
            {
              id: "conhecimento",
              options: [
                {
                  value: "nenhum",
                  label: "Nenhum",
                  trigger: "nenhumconhecimento"
                },
                {
                  value: "ouvifalar",
                  label: "Já ouvi falar e não tenho conhecimento",
                  trigger: "ouvifaalarconhecimento"
                },
                {
                  value: "contatoconteudo",
                  label: "Tenho contato com o conteúdo",
                  trigger: "contatoconteudoconhecimento"
                }
              ]
            },
            {
              id: "nenhumconhecimento",
              message: "Qual o opção te agrada mais?",
              trigger: "respostanenhumconhecimento"
            },
            {
              id: "ouvifaalarconhecimento",
              message: "Qual o opção te agrada mais?",
              trigger: "respostaouvifalarconhecimento"
            },
            {
              id: "contatoconteudoconhecimento",
              message: "Qual o opção te agrada mais?",
              trigger: "respostacontatoconteudoconhecimento"
            },

            {
              id: "respostanenhumconhecimento",
              options: [
                {
                  value: "artesvisuais",
                  label: "Artes visuais",
                  trigger: "respostaartesvisuais"
                },
                {
                  value: "logicaereproducao",
                  label: "Lógica e resolução de problemas",
                  trigger: "respostalogicaereproducao"
                }
              ]
            },
            {
              id: "respostaartesvisuais",
              component: <DadosNenhumArtesVisuais />,
              end: true
            },
            {
              id: "respostalogicaereproducao",
              component: <DadosNenhumLogicaeResolucao />,
              end: true
            },
            {
              id: "respostaouvifalarconhecimento",
              message: "teste",
              end: true
            },
            {
              id: "respostacontatoconteudoconhecimento",
              message: "teste",
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
