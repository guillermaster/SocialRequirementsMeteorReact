import React, { Component } from 'react';
import { Link } from 'react-router';

class Registration extends Component {
  handleSubmit(e) {
    e.preventDefault();
    //Meteor.call('requirements.insert', this.state.title, this.state.content);
  }

  render(){
    return(
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-header">
                <strong>Company</strong> <small>Registration Form</small>
              </div>
              <div className="card-block">
                <form action="" method="post">
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input type="text" className="form-control" id="company" placeholder="Enter your company name"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" className="form-control" id="phone" placeholder="Enter your company phone"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="Enter your company address"/>
                  </div>
                  <div className="row">
                    <div className="form-group col-sm-8">
                      <label htmlFor="city">City</label>
                      <input type="text" className="form-control" id="city" placeholder="Enter your city"/>
                    </div>
                    <div className="form-group col-sm-4">
                      <label htmlFor="postal-code">Postal Code</label>
                      <input type="text" className="form-control" id="postal-code" placeholder="Postal Code"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input type="text" className="form-control" id="country" placeholder="Enter your country"/>
                  </div>
                  <div className="form-group form-actions">
                    <div className="row">
                      <div className="cols-sm-6">
                        <button type="submit" className="btn btn-sm btn-success"
                          onClick={this.handleSubmit.bind(this)}>Submit</button>
                      </div>
                      <div className="cols-sm-6">
                        <Link to={'/'}>
                          <button className="btn btn-default">Cancel</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Registration;
