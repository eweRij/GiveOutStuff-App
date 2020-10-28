import React from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import { HashRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app container">
      <HashRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
