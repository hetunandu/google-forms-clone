/* eslint-disable import/no-named-as-default */
import { Route, Switch } from "react-router-dom";

import Form from './Form';
import React from "react";
import { hot } from "react-hot-loader";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Form} />
        </Switch>
      </div>
    );
  }
}

export default hot(module)(App);
