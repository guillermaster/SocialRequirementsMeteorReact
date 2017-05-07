import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './../startup/client/routes/routes';

ReactDOM.render(
  <Router routes={routes} history={browserHistory} />,
  document.getElementById('render-target')
);
