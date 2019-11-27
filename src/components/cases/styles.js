import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 20%;
`;

export const Case = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 35px;
  background: #fff;
  margin: 0px 10px;
  border-radius: 5px;
  height: 80%;

  -webkit-box-shadow: 0px 0px 40px -15px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 40px -15px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 40px -15px rgba(0, 0, 0, 0.75);

  span {
    color: #000;
    text-align: left;
    padding-left: 15px;
    font-size: 1.3rem;
  }

  p {
    color: #777;
    padding: 15px;
  }

  .icons {
    justify-content: space-around;
    display: flex;
    flex-direction: row;
  }

  .logo {
    text-align: center;
  }
`;
