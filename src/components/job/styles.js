import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 20%;
`;

export const Job = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 35px;
  background: #fff;
  margin: 0px 10px;
  border-radius: 5px;
  height: 80%;

  -webkit-box-shadow: 0px 0px 20px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 20px -3px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 20px -3px rgba(0, 0, 0, 0.75);

  .logo {
    text-align: center;
  }

  title {
    font-size: 1.2rem;
    color: #12f;
  }

  section {
    color: #010718;
    font-size: 1.4rem;
    padding: 10px;
  }

  p {
    color: #212529;
  }

  span {
    color: rgba(0, 0, 0, 0.85);
    font-size: 1.1rem;
    font-weight: bold;
    justify-content: right;
  }

  a {
    text-align: center;
    justify-content: center;
    font-size: 1.1rem;
    text-decoration: none;
    color: #fff;
    font-weight: bold;
  }

  button {
    background: #ce2d35;
    border: 1px solid #ce2d35;
    border-radius: 10px;
    padding: 15px;
    transition: 0.5s;
  }

  button:hover {
    background: #fff;
    border: #ce2d35 solid 1px;

    a {
      color: #ce2d35;
    }
  }
`;
