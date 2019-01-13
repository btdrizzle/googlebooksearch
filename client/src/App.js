import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Nav from "./components/Nav";
import Search from "./components/Search";
import Saved from "./components/Saved";

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Nav />
        <Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </div>
    </Router>
    );
  }
}

export default App;
