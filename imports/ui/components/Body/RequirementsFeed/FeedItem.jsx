import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FeedItem extends Component {
    render() {
        return (
          <div className="card">
            <div className="card-header">
              <h6><a href="#">Josh Owens</a> submitted a new requirement</h6>
            </div>
            <div className="card-block">
              <h5 className="card-title">{this.props.title}</h5>
              <p className="card-text">
                {this.props.content}
              </p>
            </div>
            <div className="card-footer text-muted">
              Footer
            </div>
          </div>
        )
    }
}

FeedItem.propTypes = {
    title: PropTypes.string
}

export default FeedItem;
