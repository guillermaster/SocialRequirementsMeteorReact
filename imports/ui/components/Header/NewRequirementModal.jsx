import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Meteor } from 'meteor/meteor';

const titleStyle = {
  color: '#626060',
  border: 'none',
  width: '100%'
};

class NewRequirementModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: ''
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
  }

  handleTitleChange(event){
    this.setState({title: event.target.value});
  }

  handleContentChange(event){
    this.setState({content: event.target.value});
  }

  submit(){
    console.log("submit");
    Meteor.call('requirements.insert', this.state.title, this.state.content);
  }

  render(){
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={this.props.onToggle}
        className={this.props.class}>
        <ModalHeader toggle={this.props.onToggle}>
          <input
            type="text"
            placeholder="Untitled Requirement"
            style={titleStyle}
            value={this.state.title}
            onChange={this.handleTitleChange} />
        </ModalHeader>
        <ModalBody>
          <textarea rows="9" className="form-control"
            placeholder="Describe your requirement here"
            value={this.props.content}
            onChange={this.handleContentChange} />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.props.onSubmit}>
            Submit requirement
          </Button>{' '}
          <Button color="secondary" onClick={this.props.onToggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default NewRequirementModal;
