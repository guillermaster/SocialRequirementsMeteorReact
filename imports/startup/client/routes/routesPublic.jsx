import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// Containers/Pages
import FullPublic from './../../../ui/containers/Public/FullPublic';
import Login from './../../../ui/pages/Public/Login';
import Registration from './../../../ui/pages/Public/Registration';

function withProps(Component, props) {
  return function(matchProps) {
    return <Component {...props} {...matchProps} />
  }
}

export const routesPublic = (
  <Router history={browserHistory}>
    <Route path="/" name="Home" component={FullPublic}>
      <IndexRoute component={Login} />
      <Route path="login" name="Login" component={Login} />
      <Route path="registration" name="Registration" component={Registration} />
    </Route>
  </Router>
);
