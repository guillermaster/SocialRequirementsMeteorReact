import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import FeedItem from './FeedItem';

class RequirementsFeed extends Component {

    renderFeedItems(){
      let items = [];
      this.props.requirements.map((req, idx) => {
        items.push(<FeedItem key={'req-'+idx} title={req.title} content={req.content} />)
      });
      return items;
    }

    render() {
        return (
            <div>
                { this.renderFeedItems() }
            </div>
        )
    }
}

export default createContainer(({ max }) => {
  return {
    requirements: Requirements.find({}, {sort:{createdOn: -1,}, limit:max}).fetch(),
    //limit: Session.get("feedItemsLimit")
  };
}, RequirementsFeed);
