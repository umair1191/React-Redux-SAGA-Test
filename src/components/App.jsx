import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/home";
import ItemDetails from "./item-detail"
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
    <div className="container">

      <Switch>
          <Route path="/movie-details/:id" component={ItemDetails} />
          <Route path="/" component={Home} />
      </Switch>
    </div>
    );
  }
}
export default App;