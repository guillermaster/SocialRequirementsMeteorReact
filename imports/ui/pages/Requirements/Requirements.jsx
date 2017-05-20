import React, { Component } from 'react';
import RequirementsFeedCards from './../../components/Body/RequirementsFeed/RequirementsFeedCards';

var lastScrollTop = 0;

class Requirements extends Component {

    constructor(props){
      super(props);
      this.state = { requirementsLimit: 12 };
      this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
      debugger
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(){
      let scrollTop = event.srcElement.body.scrollTop;
      if(lastScrollTop==0) lastScrollTop = scrollTop;
      let height = event.srcElement.defaultView.screen.height;
      let docHeight = event.srcElement.documentElement.offsetHeight;

      if(scrollTop > lastScrollTop && (scrollTop+height) > docHeight){
        this.setState({ requirementsLimit: this.state.requirementsLimit + 6 });
      }
      lastScrollTop = scrollTop;
    }

    render() {
        return (
            <div className="animated fadeIn">
                <RequirementsFeedCards max={this.state.requirementsLimit} filter={this.props.filter} />
            </div>
        )
    }
}

export default Requirements;
