import React, { Component } from "react";
import AddBusiness from "./Components/AddBusiness";
import { Route, Switch, HashRouter } from "react-router-dom";
import Table from "./Components/Table";
import Home from "./Components/Home";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={AddBusiness} />
          <Route exact path="/view" component={Table} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
