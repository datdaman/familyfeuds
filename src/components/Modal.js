import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

class Modal extends Component {
  
  constructor(props) {
    super(props);
    this.buttons = Array.isArray(this.props.buttons) ? this.props.buttons : ['Yes', 'No']
  }

  render() {
    const { onClose, onAction, title, content} = this.props

    return ReactDOM.createPortal(
      <div 
        onClick={() => onClose()}
        className={`ui dimmer modals visible active`}>
        <div 
          onClick={(e) => e.stopPropagation()}
          className={`ui standard modal visible active`}>
          <div className="header">{title}</div>
          <div className="content">{content}</div>
            <div className="actions">
            <button 
              className="ui button primary" 
              onClick={() => onAction()}
            >{this.buttons[0]}</button>
            <button 
              className="ui button" 
              onClick={() => onClose()}
            >{this.buttons[1]}</button>
            </div>
        </div>
      </div>,
      document.querySelector('#modal')
    )
  }
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onAction: PropTypes.func.isRequired,
  buttons: PropTypes.array,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default Modal;