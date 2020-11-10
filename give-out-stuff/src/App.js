import React from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import { HashRouter, Route, Switch } from "react-router-dom";
import Log from "./components/Log";
import Logout from "./components/Logout";
import Registration from "./components/Registration";
import GiveOut from "./components/GiveOut";
function App() {
  return (
    <div className="app">
      <HashRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/loggin" component={Log} />
          <Route path="/register" component={Registration} />
          <Route path="/logout" component={Logout}></Route>
          <Route path="/giveout" component={GiveOut}></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
