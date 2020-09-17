import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
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
      <Footer/>
    </Router>
  );
}

export default App;
