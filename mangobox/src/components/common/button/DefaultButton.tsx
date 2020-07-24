import React, { Component } from "react";
import styled from "styled-components";
type TextProps = {
  text: string;
};


class DefaultButton extends Component<TextProps> {
  render() {
    return (
      <Wrapper>
        <Button>{this.props.text}</Button>
      </Wrapper>
    );
  }
}
export default DefaultButton;

const Button = styled.button`
  &:active{
    background-color:#da932f;
    outline:none;
  }
  &:focus{
    outline:none;
  }
  height: 240px;
  width: 240px;
  border-radius: 50px;
  background: #e1a34c;
  border:none;
  box-shadow: 24px 24px 48px #bf8b41, -24px -24px 48px #ffbb57;
`;

const Wrapper = styled.div`
  background: #e1a34c;
  width:500px;
  height:500px;
  justify-content:center;
  align-items:center;
  display:flex;
`