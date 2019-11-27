import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  background: #010718;
  video {
    height: 100%;
    width: 100%;
  }

  h1 {
    @import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');

    display: block;
    position: absolute;
    flex-direction: row;
    justify-content: center;

    font-family: 'Press Start 2P', cursive;
    padding: 50px;
    font-size: 2rem;
  }

  p {
    font-size: 1.4rem;
    padding: 30px;
  }
`;

export const Jobs = styled.div`
  display: flex;
  justify-content: space-around;
  background: #141414;
  height: 100%;
`;

export const Companys = styled.div`
  display: flex;
  justify-content: space-around;
  background: #010718;
  height: 100%;
`;

export const Cases = styled.div`
  display: flex;
  justify-content: space-around;
  background: #141414;
  height: 100%;
`;
