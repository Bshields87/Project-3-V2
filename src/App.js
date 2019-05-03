import React, { Component } from "react";
import World from "./features/world";
import Game from "./components/Game";
class App extends Component {
  render() {
    return (
      <div>
        {/* <Game /> */}
        <World />
      </div>
    );
  }
}

export default App;
