import React, { Component } from "react";
type ContentState = {
  text: string
}
class BigButton extends Component<{}, ContentState> {
  render() {
    return (
      <div>
        <h1>BigButton</h1>;
      </div>
    );
  }
}
export default BigButton;
