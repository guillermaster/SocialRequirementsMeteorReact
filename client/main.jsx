import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { routes } from '../imports/startup/client/routes/routes.jsx';
// import the code that defines the collections
import  '/imports/api/requirements/requirements.js';

Meteor.startup(() => {
  render(routes, document.getElementById('render-target'));
});
