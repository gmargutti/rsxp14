import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Case = styled.div`
  display: flex;
  flex-direction: column;

  padding: 30px;
  background: #fff;
  margin: 30px;
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
  }
`;
