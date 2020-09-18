import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import ODAsScreen from "./screens/ODAsScreen.js";
import ODAScreen from "./screens/ODAScreen.js";
import MomentosScreen from "./screens/MomentosScreen.js";
import ScrollToTop from "./components/ScrollToTop.js";

function App() {
  return (
    <Router basename="/odas">
      <ScrollToTop />
      <Header />
      <Switch>
        <Route exact path="/">
          <ODAsScreen />
        </Route>
        <Route exact path="/:oda_id/momento/:momento_id">
          <MomentosScreen />
        </Route>
        <Route exact path="/:oda_id">
          <ODAScreen />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
