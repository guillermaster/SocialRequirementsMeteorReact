import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// Containers/Pages
import Full from './../../../ui/containers/Full/Full';
import Dashboard from './../../../ui/pages/Dashboard/Dashboard';
import Requirements from './../../../ui/pages/Requirements/Requirements';

function withProps(Component, props) {
  return function(matchProps) {
    return <Component {...props} {...matchProps} />
  }
}

export const routes = (
  <Router history={hashHistory}>
    <Route path="/" name="Home" component={Full}>
      <IndexRoute component={Dashboard} />
      <Route path="dashboard" name="Dashboard" component={Dashboard} />
      <Route path="requirements/" name="Requirements">
        <IndexRoute component={Requirements} />
        <Route path="all" name="All Requirements" component={Requirements} />
        <Route path="draft" name="Drafts" component={withProps(Requirements, { filter: 'draft' })} />
      </Route>
    </Route>
  </Router>
);
