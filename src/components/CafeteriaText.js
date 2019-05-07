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
          <p>
            You are starving and have to eat but you can't stop <br />
            thinking about how strange everyone on campus was <br />
            acting on the way to the cafeteria. You asked your <br />
            roommate if they noticed anything and they said "Yea, <br />
            it must be the full moon". Maybe she's right.
          </p>
        </div>
      }
    />
  </div>
);
// const Game = () => <MenuContainer>Menu</MenuContainer>;

export default CafeteriaText;
