import React from "react";
import MenuContainer from "./MenuContainer";
import "./GameMenu.css";
import MenuSelect from "./MenuSelect";

const Game = ({ start }) => (
  <MenuSelect
    active={true}
    onChoice={start}
    items={["Start Game"]}
    renderItem={item => <span>{item}</span>}
  />
);
// const Game = () => <MenuContainer>Menu</MenuContainer>;

export default Game;
