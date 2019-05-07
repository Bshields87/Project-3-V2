import React from "react";
//import MenuContainer from "./MenuContainer";
import "./GameMenu.css";
//import MenuSelect from "./MenuSelect";
import GymOptions from "./GymOptions";

const renderItem = name => <span>{name}</span>;
const GymText = () => (
  <div className="game-wrapper">
    <GymOptions
      active={true}
      onChoice={i => {
        console.log("You have chosen", i);
      }}
      renderItem={renderItem}
      items={["Run!!!", "Pick up a baseball bat and hit the minion."]}
      textBox={
        <div>
          <h3>Welcome to the Gym</h3>
          <p>You need to fit in a quick workout to clear your mind <br></br>
             before finals. However, you have encountered<br></br>
            one of the evil siren's minions. What do you do?<br></br>
          </p>
        </div>
      }
    />
  </div>
);
// const Game = () => <MenuContainer>Menu</MenuContainer>;

export default GymText;
