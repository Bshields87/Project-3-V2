import React, { Component } from "react";
import LibraryContainer from "./LibraryContainer";
import { withRouter } from "react-router";

class LibraryOptions extends React.Component {
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

    if (!this.props.active) {
      return;
    }

    let inc = true;

    if (e.keyCode == "49") {
      inc = true;
    }
    // else if (e.keyCode == "50") {
    //   inc = false;
    // }
    else if (e.keyCode == "13") {
      if (this.props.onChoice) {
        this.props.onChoice(this.state.selected);
        if (this.state.selected === 1) {
          this.props.history.push("/map");
        } else if (this.state.selected === 0) {
          this.props.history.push("/gameover");
        }
        console.log(this.props.onChoice);
      }

      return;
    } else {
      return;
    }

    this.setState(state => {
      let selected = inc
        ? (state.selected + 1) % this.props.items.length
        : state.selected == 0
        ? this.props.items.length - 1
        : (state.selected - 1) % this.props.items.length;

      let handTop = this.itemRefs[selected].offsetTop;

      return { selected, handTop };
    });

    e.preventDefault();
  }

  render() {
    return (
      <LibraryContainer style={{ ...this.props.style, paddingLeft: "44px" }}>
        {this.props.textBox}
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
            className="dorm_hand"
            style={{ top: this.state.handTop, left: this.state.handLeft }}
          >
            <img src="http://res.cloudinary.com/forte-3d/image/upload/v1512749704/hand_gkm8wr.png" />
          </div>
        ) : null}
      </LibraryContainer>
    );
  }
}

export default withRouter(LibraryOptions);
