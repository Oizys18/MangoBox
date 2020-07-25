import React from "react";
import { Route, withRouter } from "react-router-dom";
import Hello from "./components/Hello";
import Welcome from "./components/Welcome";
import Bye from "./components/Bye";
import ButtonPage from "./components/ButtonPage";
import styled from "styled-components";

function App() {
  return (
    <Wrapper className="App">
      <Route exact path="/" component={Welcome} />
      <Route exact path="/hello" component={Hello} />
      <Route exact path="/bye" component={Bye} />
      <Route exact path="/buttons" component={ButtonPage} />
    </Wrapper>
  );
}

export default withRouter(App);

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: #FFFFFF;
`;
