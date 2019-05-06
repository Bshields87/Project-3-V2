import React from "react";
import MenuContainer from "./MenuContainer";
import "./GameMenu.css";
import MenuSelect from "./MenuSelect";
import Audio from "../components/Audio"

const Game = ({ start }) => (
  <div>
      <Audio />
  <MenuSelect
    active={true}
    onChoice={start}
    items={["Start Game"]}
    renderItem={item => <span>{item}</span>}
  />
  </div>
);
// const Game = () => <MenuContainer>Menu</MenuContainer>;

export default Game;
