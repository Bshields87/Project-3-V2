import React from "react";
//import MenuContainer from "./MenuContainer";
import "./GameMenu.css";
//import MenuSelect from "./MenuSelect";
import DormOptions from "./DormOptions";

const renderItem = name => <span>{name}</span>;
const DormText = () => (
  <div className="game-wrapper">
    <DormOptions
      active={true}
      onChoice={i => {
        console.log("You have chosen", i);
      }}
      renderItem={renderItem}
      items={["Frat party? Let's do it!", "No I'm gonna stay in and code"]}
      textBox={
        <div>
          <h1>Welcome to the Dorms</h1>
          <p>so now we will tell you about the game</p>
        </div>
      }
    />
  </div>
);
// const Game = () => <MenuContainer>Menu</MenuContainer>;

export default DormText;
