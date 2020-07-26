import React, { Component } from "react";
import styled from "styled-components";
type ContentState = {
  text: string;
};
class BigButton extends Component<{}, ContentState> {
  render() {
    return <Button>BigButton</Button>;
  }
}
export default BigButton;

const Button = styled.button`
  margin: 1em;
  border: 1px solid grey;
  border-radius: 15px;
  padding: 10px;
  font-size: 15px;
  &:active{
    background-color:red;
    outline:none;
  }
  &:focus{
    outline:none;
  }
`;