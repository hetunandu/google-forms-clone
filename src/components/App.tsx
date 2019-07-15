/* eslint-disable import/no-named-as-default */
import { Route, Switch } from "react-router-dom";

import React from "react";
import { hot } from "react-hot-loader";

import FormBuilder from './FormBuilder';
import FormViewer from './FormViewer';
// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={FormBuilder} />
          <Route exact path="/view" component={FormViewer} />
        </Switch>
      </div>
    );
  }
}

export default hot(module)(App);
