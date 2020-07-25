import React, { Component } from "react";
import styled from "styled-components";
class Welcome extends Component {
  render() {
    return (
      <Wrapper>
        <Container>{/* <Card>Hello</Card> */}</Container>
      </Wrapper>
    );
  }
}
export default Welcome;

const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #ffaf36;
`;

const Container = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 60vw;
  height: 60vh;
  border-radius: 50px;
  background: lightgrey;
  /* background: #ff6f47; */
  box-shadow: 24px 24px 50px #b57c26, -24px -24px 50px #ffe246;
  /* box-shadow: 24px 24px 50px #cc8c2b, -24px -24px 50px #ffd241; */
  /* box-shadow: 24px 24px 50px #cc5939, -24px -24px 50px #ff8555; */
`;

// const Card = styled.div`
//   justify-content: center;
//   align-items: center;
//   display: flex;
//   width: 58vw;
//   height: 58vh;
//   background: linear-gradient(145deg, #e69e31, #ffbb3a);
//   box-shadow: 24px 24px 50px #cc8c2b, -24px -24px 50px #ffd241;
//   border-radius: 50px;
// `;
