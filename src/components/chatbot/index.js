import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

import DadosNenhumArtesVisuais from "../dadosnenhumartesvisuais/index";
import DadosNenhumLogicaeResolucao from "../dadosnenhumlogicaeresolucao/index";

import DadosYoutube from "../dadosyoutube/index";
import DadosArtigos from "../dadosartigos/index";
import DadosCursos from "../dadoscursos/index";

const configBot = {
  width: "500px",
  height: "600px",
  floating: true,
  botDelay: 1000,
  headerTitle: "BotX",
  recognitionLang: "Pt-br",
  botAvatar: "https://media2.giphy.com/media/3eP3Vo0fcJBOqPFnjt/source.gif"
};

//Palhetas do bot
const theme = {
  background: "#f5f8fb",
  fontFamily: "Arial, Helvetica, sans-serif",
  headerBgColor: "#CE2D35",
  headerFontColor: "#fff",
  headerFontSize: "17px",
  botBubbleColor: "#CE2D35",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#000"
};

class SimpleChatForm extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ChatBot
          handleEnd={this.handleEnd}
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
              trigger: "continue"
            },
            {
              id: "respostalogicaereproducao",
              component: <DadosNenhumLogicaeResolucao />,
              trigger: "continue"
            },
            {
              id: "respostaouvifalarconhecimento",
              options: [
                {
                  value: "artigos",
                  label: "Artigos para estudar",
                  trigger: "respostaartigos"
                },
                {
                  value: "youtube",
                  label: "Canais no youtube",
                  trigger: "respostayoutube"
                },
                {
                  value: "cursos",
                  label: "Cursos",
                  trigger: "respostacursos"
                }
              ]
            },
            {
              id: "respostaartigos",
              component: <DadosArtigos />,
              trigger: "continue"
            },
            {
              id: "respostayoutube",
              component: <DadosYoutube />,
              trigger: "continue"
            },
            {
              id: "respostacursos",
              component: <DadosCursos />,
              trigger: "continue"
            },

            {
              id: "continue",
              message: "Você tem outra dúvida?",
              trigger: "continue-question"
            },

            {
              id: "continue-question",
              options: [
                {
                  value: "sim",
                  label: "Sim",
                  trigger: "respostatemail"
                },
                {
                  value: "nao",
                  label: "Não",
                  trigger: "nao-question"
                }
              ]
            },
            {
              id: "nao-question",
              message:
                "Obrigado por falar comigo. Espero que você seja um futuro e grande programador",
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
