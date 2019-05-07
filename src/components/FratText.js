import React from "react";
//import MenuContainer from "./MenuContainer";
import "./GameMenu.css";
//import MenuSelect from "./MenuSelect";
import FratOptions from "./FratOptions";

const renderItem = name => <span>{name}</span>;
const FratText = () => (
  <div className="game-wrapper">
    <FratOptions
      active={true}
      onChoice={i => {
        console.log("You have chosen", i);
      }}
      renderItem={renderItem}
      items={[
        "Attack her with the same bat you used on her minion.",
        "Turn off the music."
      ]}
      textBox={
        <div>
          <h3>Welcome to the Frat</h3>
          <p>
            You arrive at the frat party and realize that the evil <br />
            siren is there. She's preparing to get on stage and hypnotize
            everyone <br />
            with her irresistible voice. Uh oh! What do you do?
          </p>
        </div>
      }
    />
  </div>
);
// const Game = () => <MenuContainer>Menu</MenuContainer>;

export default FratText;
