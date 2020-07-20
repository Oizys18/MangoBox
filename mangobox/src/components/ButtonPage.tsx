import React, { Component } from "react";
import BigButton from "./common/button/BigButton";
import DefaultButton from "./common/button/DefaultButton";
import SmallButton from "./common/button/SmallButton";

class ButtonPage extends Component {
  render() {
    return (
      <div>
        <h1>ButtonPage</h1>
        <div>
          <BigButton></BigButton>
        </div>
        <div>
          <DefaultButton></DefaultButton>
        </div>
        <div>
          <SmallButton></SmallButton>
        </div>
      </div>
    );
  }
}
export default ButtonPage;
