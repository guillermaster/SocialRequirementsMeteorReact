import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

class Login extends Component {
  state = { email: '', password: '' };

  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  }

  handleSubmit(e) {
    e.preventDefault();
    //Meteor.call('requirements.insert', this.state.title, this.state.content);
  }

  render(){
    return(
      <div className="col-sm-4">
        <div className="card">
          <div className="card-header">
            Login to RekIDEA
          </div>
          <div className="card-block">
            <form action="" method="post">
              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-addon"><i className="fa fa-envelope"></i></span>
                  <input type="email" id="email" name="email" className="form-control" placeholder="Email"
                    onChange={this.handleChange.bind(this, 'email')}/>
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-addon"><i className="fa fa-asterisk"></i></span>
                  <input type="password" id="password" name="password" className="form-control" placeholder="Password"
                    onChange={this.handleChange.bind(this, 'password')}/>
                </div>
              </div>
              <div className="form-group form-actions">
                <button type="submit" className="btn btn-sm btn-success"
                  onClick={this.handleSubmit.bind(this)}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
