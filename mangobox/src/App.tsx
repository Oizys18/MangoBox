import React from "react";
import { Route, withRouter } from "react-router-dom";
import Main from "./components/Main";
import About from "./components/About";
import Detail from "./components/Detail";
import styled from "styled-components";

function App() {
  return (
    <Wrapper className="App">
      <Route exact path="/" component={Main} />
      <Route exact path="/about" component={About} />
      <Route exact path="/detail" component={Detail} />
    </Wrapper>
  );
}

export default withRouter(App);

// Default background
const Wrapper = styled.div`
  ::-webkit-scrollbar {
    display: none;
  }
`;
