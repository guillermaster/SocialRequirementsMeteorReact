import React, { Component } from 'react';
import { Dropdown, DropdownMenu, DropdownItem, Progress } from 'reactstrap';
import RequirementsFeed from './../../components/Body/RequirementsFeed/RequirementsFeed';
//import SummaryWidget from './../../components/Body/SummaryWidgets/SummaryWidget';

var lastScrollTop = 0;

class Dashboard extends Component {

  constructor(props){
    super(props);
    this.state = { requirementsLimit: 4 };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(){
    let scrollTop = event.srcElement.body.scrollTop;
    if(lastScrollTop==0) lastScrollTop = scrollTop;
    let height = event.srcElement.defaultView.screen.height;
    let docHeight = event.srcElement.documentElement.offsetHeight;

    if(scrollTop > lastScrollTop && (scrollTop+height) > docHeight){
      this.setState({ requirementsLimit: this.state.requirementsLimit + 3 });
    }
    lastScrollTop = scrollTop;
  }

  render() {
    return (
      <div className="animated fadeIn container">
        <div className="row">
          <div className="col-md-8">

              <RequirementsFeed max={this.state.requirementsLimit} />

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
