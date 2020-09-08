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
import HomeScreen from "./screens/HomeScreen.js";

function App() {
  return (
    <Router>
      <Container>
        <Header />
        <nav className="nav-header">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/odas">Odas</Link>
            </li>
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/odas">
            <ODAsScreen />
          </Route>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
