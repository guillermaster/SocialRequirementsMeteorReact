import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import ReqCard from './../RequirementCard/ReqCard';

class RequirementsFeedCards extends Component {

    // add a set of requirement elements to a bootstrap div row
    renderRequirementsRow(requirements, key){
        return (
            <div key={key} className="row">
                { requirements }
            </div>
        )
    }

    /// generates a list of requirement cards elements to be rendered
    renderRequirementsCards() {
        let reqs = [];
        let reqRows = [];

        this.props.requirements.map((req, i) => {
            if(reqs.length === 6){
                reqRows.push(this.renderRequirementsRow(reqs, i/6));
                reqs = [];
            }
            reqs.push(<ReqCard key={i} requirement={req} />);
        });

        if(reqs.length > 0) reqRows.push(this.renderRequirementsRow(reqs, 0));

        return reqRows;
    }

    render() {
        return (
            <div>
                { this.renderRequirementsCards() }
            </div>
        )
    }
}

export default createContainer(({ max, filter }) => {
  return {
    requirements: Requirements.find(filter!=undefined ? filter : {}, {sort:{createdOn: -1,}, limit:max}).fetch()
  };
}, RequirementsFeedCards);
