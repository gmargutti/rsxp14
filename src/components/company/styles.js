import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  padding: 35px;
  background: #fff;
  margin: 15px 40px;
  border-radius: 5px;

  -webkit-box-shadow: 0px 0px 5px -3px rgba(255, 255, 255, 1);
  -moz-box-shadow: 0px 0px 5px -3px rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 5px -3px rgba(255, 255, 255, 1);

  .logo {
    text-align: center;
  }

  section {
    color: #212529;
    padding: 10px;
  }

  a {
    text-align: center;
    font-size: 1rem;
    color: #fff;
    font-weight: bold;
  }

  button {
    border: solid #1555fe 1px;
    background: #1555fe;
    padding: 10px;
    border-radius: 10px;
    transition: 0.5s;
  }

  button:hover {
    background: #fff;

    a {
      color: #1555fe;
    }
  }
`;
