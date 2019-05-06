import React from "react";
//import MenuContainer from "./MenuContainer";
import "./GameMenu.css";
//import MenuSelect from "./MenuSelect";
import LibraryOptions from "./LibraryOptions";

const renderItem = name => <span>{name}</span>;
const LibraryText = () => (
  <div className="game-wrapper">
    <LibraryOptions
      active={true}
      onChoice={i => {
        console.log("You have chosen", i);
      }}
      renderItem={renderItem}
      items={["Throw the book at her face.", "Take the book and run."]}
      textBox={
        <div>
          <h3>Welcome to the Library</h3>
          <p>You need to check out a textbook for your Greek <br></br>
             Mythology class. As you try to check it out, a <br></br>
             possessed library attacks you. What do you do? <br></br>
          </p>
        </div>
      }
    />
  </div>
);
// const Game = () => <MenuContainer>Menu</MenuContainer>;

export default LibraryText;
