import React, { Component } from "react";

class DadosYoutube extends Component {
  render() {
    const linkone = `https://www.youtube.com/channel/UCU5JicSrEM5A63jkJ2QvGYw/videos`;
    const linktwo = `https://www.youtube.com/channel/UCSfwM5u0Kce6Cce8_S72olg/videos`;
    const linktree = `https://www.youtube.com/user/cursosemvideo/videos`;
    return (
      <div style={{ width: "100%" }}>
        <h1 style={{ fontSize: 15, color: "#000" }}>
          Sugestão abaixo de videos
        </h1>
        <br></br>
        <a href={linkone} target="_black">
          Canal do filipe deschamps
        </a>
        <br></br>
        <a href={linktwo} target="_black">
          Canal da rocketseat
        </a>
        <br></br>
        <a href={linktree} target="_black">
          Canal do curso em video
        </a>
      </div>
    );
  }
}

export default DadosYoutube;
