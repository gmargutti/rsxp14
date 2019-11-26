import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Job = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 35px;
  background: #fff;
  margin: 0px 10px;
  border-radius: 5px;
  height: 70%;

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
    padding: 10px;
  }

  span {
    color: #866;
    font-size: 1.1rem;
  }

  a {
    text-align: center;
    font-size: 1.1rem;
    text-decoration: none;
    color: #fff;
    font-weight: bold;
  }

  button {
    background: #010760;
    border: 1px solid #010760;
    border-radius: 10px;
    padding: 15px;
    transition: 0.5s;
  }

  button:hover {
    background: #fff;
    border: #010730 solid 1px;

    a {
      color: #010730;
    }
  }
`;
