import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 20%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #141414;
  padding: 40px;
  border-radius: 10px;
  height: 80%;

  -webkit-box-shadow: 0px 0px 5px -3px rgba(255, 255, 255, 1);
  -moz-box-shadow: 0px 0px 5px -3px rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 5px -3px rgba(255, 255, 255, 1);

  .logo {
    text-align: center;
  }

  p {
    color: #212529;
    padding: 10px;
    color: #fafafa;
  }

  a {
    text-align: center;
    font-size: 1rem;
    color: #fafafa;
    font-weight: bold;
  }

  button {
    border: solid #ce2d35 1px;
    background: #ce2d35;
    padding: 10px;
    border-radius: 10px;
    transition: 0.5s;
  }

  button:hover {
    background: #fff;

    a {
      color: #ce2d35;
    }
  }
`;
