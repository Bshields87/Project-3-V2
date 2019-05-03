import React, { Component } from "react";
import MenuContainer from "./MenuContainer";
import { Router } from "react-router-dom";
import App from "../App";
import { withRouter } from "react-router";

class MenuSelect extends React.Component {
  constructor(props) {
    super(props);
    this.itemRefs = [];
    this.state = {
      selected: this.props.selected || 0,
      handTop: 0,
      handLeft: 0
    };

    this.onKeyDown = this.onKeyDown.bind(this);
  }

  componentDidMount() {
    let selectedElement = this.itemRefs[this.state.selected];

    this.setState({
      handTop: selectedElement.offsetTop
    });

    window.addEventListener("keydown", this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onKeyDown);
  }

  onKeyDown(e) {
    e.preventDefault();
    if (e.keyCode == "13" || e.keyCode == "32") {
      console.log("you want to start");
      this.props.history.push("/map");
    }
  }

  render() {
    console.log(this.props.history);
    return (
      <MenuContainer style={{ ...this.props.style, paddingLeft: "44px" }}>
        {this.props.items.map((item, index) => (
          <div
            className="menu_item_wrapper"
            style={this.props.itemStyle}
            ref={e => (this.itemRefs[index] = e)}
            key={index}
          >
            {this.props.renderItem(item, index)}
          </div>
        ))}
        {this.props.active ? (
          <div
            className="menu_hand"
            //style={{ top: this.state.handTop, left: this.state.handLeft }}
          >
            <img src="http://res.cloudinary.com/forte-3d/image/upload/v1512749704/hand_gkm8wr.png" />
          </div>
        ) : null}
      </MenuContainer>
    );
  }
}
export default withRouter(MenuSelect);
