import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router';

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
      <div className="app flex-row align-items-center animated fadeIn">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card-group mb-0">
                <div className="card p-4">
                  <div className="card-block">
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <div className="input-group mb-3">
                      <span className="input-group-addon"><i className="icon-email"></i></span>
                      <input type="email" className="form-control" placeholder="Email"
                        value={this.state.email} onClick={this.handleChange.bind(this,'email')} />
                    </div>
                    <div className="input-group mb-4">
                      <span className="input-group-addon"><i className="icon-lock"></i></span>
                      <input type="password" className="form-control" placeholder="Password"
                        value={this.state.password} onClick={this.handleChange.bind(this,'password')} />
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <button type="button" className="btn btn-primary px-4"
                          onClick={this.handleSubmit.bind(this)}>Login</button>
                      </div>
                      <div className="col-6 text-right">
                        <button type="button" className="btn btn-link px-0">Forgot password?</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card card-inverse card-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <div className="card-block text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Request access to an existent organization or create a new one.</p>
                      <Link to={'/registration'}>
                        <button type="button" className="btn btn-primary active mt-3">Register Now!</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
