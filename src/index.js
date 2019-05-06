import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Game from "../src/components/Game";
import Dorm from "../src/components/Dorm";
import GameOver from "../src/components/GameOver";
// import Library from "../src/components/Library";
// import Cafeteria from "../src/components/Cafeteria";
// import Frathouse from "../src/components/Frathouse";
import store from "./config/store";
// import gameMusic from "./features/world/song21_02.mp3";
import Audio from "./components/Audio.js"

const routing = (
  <Provider store={store}>
    <Router>
      <div>
        <Audio/>
        <Route exact path="/" component={Game} />
        {/* <Route path="/" component={Audio}/>  */}
        <Route path="/map" component={App} />
        <Route path="/dorm" component={Dorm} />
        <Route path="/gameover" component={GameOver} />
        {/* <Route path="/frathouse" component={Frathouse} />
        <Route path="/cafeteria" component={Cafeteria} />
        <Route path="/library" component={Library} /> */}
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(routing, document.getElementById("root"));
//ReactDOM.render(<App />, document.getElementById("root"));
