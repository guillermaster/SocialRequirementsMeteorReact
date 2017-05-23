import React, { Component } from 'react';
//import { Dropdown, DropdownMenu, DropdownItem } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Header extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleNewRequirement = this.toggleNewRequirement.bind(this);
    this.state = {
      dropdownOpen: false,
      modalNewRequirement: false
    };
  }

  toggle(e) {
    e.preventDefault();
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  toggleNewRequirement(){
    this.setState({
      modalNewRequirement: !this.state.modalNewRequirement
    });
  }

  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  }

  sidebarMinimize(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-minimized');
  }

  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  asideToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('aside-menu-hidden');
  }

  render() {
    return (

      <header className="app-header navbar">
        <button className="navbar-toggler mobile-sidebar-toggler d-lg-none" onClick={this.mobileSidebarToggle} type="button">&#9776;</button>
        <a className="navbar-brand" href="#"></a>
          <ul className="nav navbar-nav d-md-down-none">
            <li className="nav-item">
              <a className="nav-link navbar-toggler sidebar-toggler" onClick={this.sidebarToggle} href="#">&#9776;</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link" href="#">Dashboard</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link" href="#">Users</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link" href="#">Settings</a>
            </li>
          </ul>
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item d-md-down-none">
              <a className="nav-link" href="#" onClick={this.toggleNewRequirement}><i className="icon-plus"></i></a>
            </li>
            <li className="nav-item d-md-down-none">
              <a className="nav-link" href="#"><i className="icon-magnifier"></i></a>
            </li>
            <li className="nav-item d-md-down-none">
              <a className="nav-link" href="#"><i className="icon-layers"></i></a>
            </li>
            <li className="nav-item d-md-down-none">
              <a className="nav-link" href="#"><i className="icon-grid"></i></a>
            </li>
            <li className="nav-item d-md-down-none">
              <a className="nav-link" href="#"><i className="icon-list"></i></a>
            </li>
            <li className="nav-item d-md-down-none">
              <a className="nav-link" href="#"><i className="icon-question"></i></a>
            </li>
          <li className="nav-item d-md-down-none">
            <a onClick={this.asideToggle} className="nav-link nav-link" data-toggle="dropdown" href="" role="button" aria-haspopup="true" aria-expanded={this.state.dropdownOpen}>
              <img src={'img/avatars/7.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
              <span>admin &#9776;</span>
              <span className="badge badge-pill badge-danger">5</span>
            </a>
          </li>
          </ul>

          <Modal isOpen={this.state.modalNewRequirement} toggle={this.toggleNewRequirement} className={'modal-lg ' + this.props.className}>
                  <ModalHeader toggle={this.toggleNewRequirement}>Modal title</ModalHeader>
                  <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggleNewRequirement}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={this.toggleNewRequirement}>Cancel</Button>
                  </ModalFooter>
                </Modal>
      </header>
    )
  }
}

export default Header;
