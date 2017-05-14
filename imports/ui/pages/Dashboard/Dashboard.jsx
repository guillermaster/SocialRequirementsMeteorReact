import React, { Component } from 'react';
import RequirementsFeed from './../../components/Body/RequirementsFeed/RequirementsFeed';
//import SummaryWidget from './../../components/Body/SummaryWidgets/SummaryWidget';

class Dashboard extends Component {

  render() {
    return (
      <div className="animated fadeIn container">
        <div className="row">
          <div className="col-md-8">

              <RequirementsFeed />

          </div>
          <div className="col-md-4">
            right content goes here
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
