import React, { Component } from 'react';
//import RecentRequirements from './../../components/Body/RecentRequirements/RecentRequirements';
//import SummaryWidget from './../../components/Body/SummaryWidgets/SummaryWidget';

class Dashboard extends Component {

  render() {
    return (
      <div className="animated fadeIn container">
        <div className="row">
          <div className="col-md-4">
              Requiremens feed goes here
          </div>
          <div className="col-sm-12 col-md-8">
            right content goes here
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
