import React, { Component } from "react";
import styled from "styled-components";

class About extends Component {
  render() {
    return (
      <PostWrapper>
        <PostContainer>About Page</PostContainer>
      </PostWrapper>
    );
  }
}
export default About;

const PostWrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  /* position */
  position: absolute;
  left: 30vw;
  top: 15 v h;

  /* size */
  height: 70vh;
  width: 40vw;
  /* background style */
  background-color: ghostwhite;
`;

const PostContainer = styled.div``;
