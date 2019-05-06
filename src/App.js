import React, { Component } from "react";
import World from "./features/world";
import Game from "./components/Game";
import Audio from "./components/Audio"

class App extends Component {
  // componentDidMount() {
  //   console.log("play music");
  //   document.getElementById("gameMusic").play();
  // }
  render() {
    return (
      <div>
        {/* <Game /> */}
        <Audio />
        <World />
      </div>
    );
  }
}

export default App;
