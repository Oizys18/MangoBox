import React from "react";
import { Route, withRouter } from "react-router-dom";
import Welcome from "./components/Welcome";
import ButtonPage from "./components/ButtonPage";
import styled from "styled-components";

function App() {
  return (
    <Wrapper className="App">
      <Route exact path="/" component={Welcome} />
      <Route exact path="/buttons" component={ButtonPage} />
    </Wrapper>
  );
}

export default withRouter(App);

const Wrapper = styled.div`

`;
