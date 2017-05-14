import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import FeedItem from './FeedItem';
import InfiniteScroll from './infiniteScroll';

class RequirementsFeed extends Component {
    constructor(props){
      super(props);
      this.state = { limit: -1};
    }

    renderFeedItems(){
      let items = [];
      this.props.requirements.map((req) => {
        items.push(<FeedItem title={req.title} content={req.content} />)
      });
      return items;
    }

    render() {
      console.log('limit: ', this.props.limit);
        return (
            <div>
                { this.renderFeedItems() }
            </div>
        )
    }
}

export default createContainer(() => {
  return {
    requirements: Requirements.find({}, {sort:{createdOn: -1,}, }).fetch(),
    //limit: Session.get("feedItemsLimit")
  };
}, RequirementsFeed);
