import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ReqCard extends Component {
    render() {
        return (
            <div className="col-sm-6 col-md-4">
                <div className="card">
                    <div className="card-header">
                        {this.props.requirement.title}
                    </div>
                    <div className="card-block">
                        {this.props.requirement.content}
                    </div>
                </div>
            </div>
        )
    }
}

ReqCard.propTypes = {
    requirement: PropTypes.object
}

export default ReqCard;
