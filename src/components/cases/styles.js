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
  margin: 20px;
  border-radius: 5px;

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
  }
`;
