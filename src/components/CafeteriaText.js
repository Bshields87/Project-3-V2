import React from "react";
//import MenuContainer from "./MenuContainer";
import "./GameMenu.css";
//import MenuSelect from "./MenuSelect";
import CafeteriaOptions from "./CafeteriaOptions";

const renderItem = name => <span>{name}</span>;
const CafeteriaText = () => (
  <div className="game-wrapper">
    <CafeteriaOptions
      active={true}
      onChoice={i => {
        console.log("You have chosen", i);
      }}
      renderItem={renderItem}
      items={["Pad thai", "Pizza"]}
      textBox={
        <div>
          <h3>Welcome to the Cafeteria</h3>
          <p>You are starving, and you must eat to maintain your strength. Unfortunately, the evil
            siren has poisoned most of the food supply, so you have a good chance of dying if you eat. 
            Pick a meal.
          </p>
        </div>
      }
    />
  </div>
);
// const Game = () => <MenuContainer>Menu</MenuContainer>;

export default CafeteriaText;
