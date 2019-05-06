import React from "react";
import gameOver from "./GameOver.png";

class GameOver extends React.Component {
  render() {
    return (
      <div>
        <img style={{ width: "100vw" }} src={gameOver} />;
      </div>
    );
  }
}

export default GameOver;
