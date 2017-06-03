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
      <div className="animated fadeIn">
        <div className="row">
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
                  <br />
                  <div className="form-group form-actions">
                    <Link to={'/registration'} className="nav-link" activeClassName="active">New enterprise account</Link>
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

export default Login;
