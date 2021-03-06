import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Aleo&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: 0;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-size: 14px;
    font-family: 'Aleo', sans-serif;
    color: #fff;
  }
  
  .rsc-input {
    color: #000;
  }

  .rsc-header-title {
    font-size: 16px;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  p {
    font-family: 'Lato', sans-serif;
    font-size: 1rem;
  }
`;
