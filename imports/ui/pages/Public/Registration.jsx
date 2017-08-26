import React, { Component } from 'react';
import { Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';

class Registration extends Component {

  handleSubmit(e) {
    e.preventDefault();
    console.log('test');
    //Meteor.call('requirements.insert', this.state.title, this.state.content);
  }

  displayCompanies(){
    let selectCompanies = this.props.companies.map((company, idx) =>
      <option key={idx} value={company._id}>{company.name}</option>
    );

    return (
      <select className="form-control" id="company">
        <option value="">- Select company -</option>
        {selectCompanies}
      </select>
    );
  }

  render(){
    return(
      <div className="app flex-row align-items-center animated fadeIn">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">

              <div className="card mx-4">
                <div className="card-block p-4">

                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>

                  <div className="input-group mb-3">
                    <span className="input-group-addon"><i className="icon-user"></i></span>
                    <input type="text" className="form-control" placeholder="Full name" id="name"/>
                  </div>

                  <div className="input-group mb-3">
                    <span className="input-group-addon"><i className="icon-badge"></i></span>
                    {this.displayCompanies()}
                  </div>

                  <div className="input-group mb-3">
                    <span className="input-group-addon">@</span>
                    <input type="text" className="form-control" placeholder="Email" id="email"/>
                  </div>

                  <div className="input-group mb-3">
                    <span className="input-group-addon"><i className="icon-lock"></i></span>
                    <input type="password" className="form-control" placeholder="Password" id="password"/>
                  </div>

                  <div className="input-group mb-4">
                    <span className="input-group-addon"><i className="icon-lock"></i></span>
                    <input type="password" className="form-control" placeholder="Repeat password" id="passwordConf"/>
                  </div>

                  <div className="row">
                    <div className="col-sm-6">
                      <button type="submit" className="btn btn-block btn-primary"
                        onClick={this.handleSubmit.bind(this)}>Create Account</button>
                    </div>
                    <div className="col-sm-6">
                      <Link to={'/'}>
                        <button className="btn btn-block btn-default">Cancel</button>
                      </Link>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default createContainer(({ max }) => {
  return {
    companies: Companies.find({}, {sort:{name: -1}}).fetch(),
    //limit: Session.get("feedItemsLimit")
  };
}, Registration);
