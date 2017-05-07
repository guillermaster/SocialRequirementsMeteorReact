import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { routes } from '../imports/startup/client/routes/routes.jsx';

Meteor.startup(() => {
  render(routes, document.getElementById('render-target'));
});
