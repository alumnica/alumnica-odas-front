import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import ODAsScreen from "./screens/ODAsScreen.js"
import HomeScreen from "./screens/HomeScreen.js"

function App() {
  return (
      <Router>
        <div className="App">
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
              <HomeScreen/>
            </Route>
          </Switch>
        </div>
      </Router>)
}

export default App;
