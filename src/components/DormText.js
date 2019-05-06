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
      items={["Hungry? Let's grab some food.", "No I'm gonna stay in and code"]}
      textBox={
        <div>
          <h3>Welcome to the Dorms</h3>
          <p>Your gossipy roommate tells you about a cool frat <br></br>
           party where a new student is going to perform a live <br></br>
           show, but must eat, study, and exercise beforehand. <br></br>
           What do you do?
          </p>
        </div>
      }
    />
  </div>
);
// const Game = () => <MenuContainer>Menu</MenuContainer>;

export default DormText;
