import React, { Component } from "react";
import gameMusic from "../features/world/song21_02.mp3";

class Audio extends Component {
 

  render() {
    return (
        <audio autoPlay={true} id="gameMusic" loop>
          <source src={gameMusic} />
          Your browser does not support the audio tag.
        </audio>
      
    );
  }
}

export default Audio;
