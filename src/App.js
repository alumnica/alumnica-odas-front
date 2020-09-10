import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.scss";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Header from "./components/Header.js";
import Alert from "react-bootstrap/Alert";
import ODAsScreen from "./screens/ODAsScreen.js";
import ODAScreen from "./screens/ODAScreen.js";
import MomentosScreen from "./screens/MomentosScreen.js";

function App() {
  return (
    <Router basename="/odas">
      <Header />
      {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/">
          <ODAsScreen />
        </Route>
        <Route exact path="/:id/:name">
          <MomentosScreen />
        </Route>
        <Route exact path="/:id">
          <ODAScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
