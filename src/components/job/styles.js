import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Job = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 35px;
  background: #fff;
  margin: 10px;
  border-radius: 5px;
  height: 70%;

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
