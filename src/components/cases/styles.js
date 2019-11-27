import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Case = styled.div`
  display: flex;
  flex-direction: column;

  -webkit-box-shadow: 0px 0px 40px -15px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 40px -15px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 40px -15px rgba(0, 0, 0, 0.75);

  width: 100%;
  padding: 25px 20px;
  margin: 30px;
  background: #fff;
  border-radius: 5px;

  span {
    color: #000;
    padding-left: 15px;
    font-size: 1.3rem;
  }

  p {
    color: #888;
    padding: 15px;
  }

  .icons {
    justify-content: space-around;
    display: flex;
    flex-direction: row;
  }
`;
