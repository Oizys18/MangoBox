import React, { Component } from "react";
import BigButton from "./common/button/BigButton";
import DefaultButton from "./common/button/DefaultButton";
import SmallButton from "./common/button/SmallButton";
import styled from "styled-components"
class ButtonPage extends Component {
  render() {
    return (
      <Wrapper>
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
      </Wrapper>
    );
  }
}
export default ButtonPage;

const Wrapper = styled.div`
`
const Container = styled.div``
