import * as React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./App.css";
import logo from "./logo.svg";
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <Link to="/">Home</Link>
            <br></br>
            <Link to="/intro">소개</Link>
          </nav>
          <Route exact={true} path="/" render={() => <h3>Home</h3>} />
          <Route exact={true} path="/intro" render={() => <h3>소개</h3>} />
        </div>
      </Router>
    );
  }
}
export default App;
