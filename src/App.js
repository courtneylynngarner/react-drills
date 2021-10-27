import React from "react";
import logo from "./logo.svg";
import { BrowseRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Signup from "./Signup";
import Details from "./Details";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
        </Switch>
      </div>
      ;
    </Router>
  );
}

export default App;
