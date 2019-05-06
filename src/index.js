import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Game from "../src/components/Game";
import Dorm from "../src/components/Dorm";
import GameOver from "../src/components/GameOver";
import Frat from "../src/components/Frat";
import store from "./config/store";
import Gym from "./components/Gym"
import Cafeteria from "./components/Cafeteria"
import Library from "./components/Library"

const routing = (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Game} />
        <Route path="/map" component={App} />
        <Route path="/dorm" component={Dorm} />
        <Route path="/gameover" component={GameOver} />
        <Route path="/gym" component={Gym} />
        <Route path="/cafeteria" component={Cafeteria} />
        <Route path="/library" component={Library} />
        <Route path="/frathouse" component={Frat}/>
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(routing, document.getElementById("root"));
//ReactDOM.render(<App />, document.getElementById("root"));
