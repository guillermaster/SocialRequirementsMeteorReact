import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { routes } from '../imports/startup/client/routes/routes.jsx';
import { routesPublic } from '../imports/startup/client/routes/routesPublic.jsx';
// import the code that defines the collections
import  '/imports/api/requirements/requirements.js';

Meteor.startup(() => {
  if (Meteor.user()){
    render(routes, document.getElementById('render-target'));
  }
  else{
    render(routesPublic, document.getElementById('render-target'));
  }
});
