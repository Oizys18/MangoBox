import React, { Component } from "react";
import styled from "styled-components";
type ContentState = {
  text: string;
};
class BigButton extends Component<{}, ContentState> {
  render() {
    return <BButton>BigButton</BButton>;
  }
}
export default BigButton;

const BButton = styled.button`
  border: 1px solid grey;
  border-radius: 15px;
  padding: 10px;
  font-size: 15px;
  & :active {
    display: none;
  }
`;
