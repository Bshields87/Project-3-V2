import React from "react";
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
          <p>
            Your gossipy roommate tells you about a cool frat <br />
            party where the colleges newest swimstar is going to <br />
            perform a live show. You've got tons of school work to <br />
            do but it is Friday. What do you do?
          </p>
        </div>
      }
    />
  </div>
);

export default DormText;
