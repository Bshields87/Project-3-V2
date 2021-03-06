import React from "react";
import Map from "../map";
import Player from "../player";

import { tiles } from "../../data/maps/1";
import store from "../../config/store";

function World(props) {
  store.dispatch({
    type: "ADD_TILES",
    payload: {
      tiles: tiles
    }
  });

//   const creepyTunez = new Audio("./song21_02.mp3");
//   creepyTunez.play();
  
  return (
    <div
      style={{
        position: "relative",
        width: "1000px",
        height: "600px",
        margin: "20px auto"
      }}
    >
      
      <Map />
      <Player />
    </div>
  );
}

export default World;
