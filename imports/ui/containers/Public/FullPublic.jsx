import React, { Component } from 'react';

class FullPublic extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-body">
          <main className="main">
            <div className="container-fluid">
              {this.props.children}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default FullPublic;
