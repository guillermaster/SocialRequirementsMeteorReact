import React, { Component } from 'react';
import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';


class FullPublic extends Component {
  render() {
    return (
      <div className="app">
        <Header />
          <div className="app-body">
            <main className="main">
              <div className="container-fluid">
                {this.props.children}
              </div>
            </main>
            <Aside />
          </div>
        <Footer />
      </div>
    );
  }
}

export default FullPublic;
