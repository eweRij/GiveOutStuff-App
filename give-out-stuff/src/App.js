import React from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import { HashRouter, Route, Switch } from "react-router-dom";
import Log from "./components/Log";
import Registration from "./components/Registration";
function App() {
  return (
    <div className="app">
      <HashRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/loggin" component={Log} />
          <Route exact path="/register" component={Registration} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
