import React, { Component } from 'react';
import ReqCard from './../../components/Body/RequirementCard/ReqCard';
import { getMockRequirements } from './../../../api/requirements/requirements.js';

class Requirements extends Component {

    constructor(props){
        super(props);
        this.state = {
            filter: props.filter
        }
    }

    getRequirements() {
        let request = {
            filter: this.state.filter
        }
        let requirements = getMockRequirements(request);
        return requirements;
    }

    // add a set of requirement elements to a bootstrap div row
    renderRequirementsRow(requirements, key){
        return (
            <div key={key} className="row">
                { requirements }
            </div>
        )
    }

    /// generates a list of requirement cards elements to be rendered
    requirementsRowsList() {
        let reqs = [];
        let reqRows = [];

        this.getRequirements().map((req, i) => {
            if(reqs.length === 6){
                reqRows.push(this.renderRequirementsRow(reqs, i/6));
                reqs = [];
            }
            reqs.push(<ReqCard key={req.id} requirement={req} />);
        });

        if(reqs.length > 0) reqRows.push(this.renderRequirementsRow(reqs, 0));

        return reqRows;
    }

    render() {
        return (
            <div className="animated fadeIn">
                { this.requirementsRowsList() }
            </div>
        )
    }
}

export default Requirements;
