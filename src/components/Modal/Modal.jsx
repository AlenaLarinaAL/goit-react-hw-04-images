import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalBackdrop, ModalBtn, ModalContent } from './Modal.styled';
import { AiOutlineClose } from 'react-icons/ai';
import PropTypes from 'prop-types';

const modalPortal = document.querySelector('#modal-root');

export class Modal extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { url, onClose } = this.props;

    return createPortal(
      <ModalBackdrop onClick={this.handleBackdropClick}>
        <ModalContent>
          <ModalBtn type="button" onClick={onClose}>
            <AiOutlineClose size={25} />
          </ModalBtn>
          <img src={url} alt="" />
        </ModalContent>
      </ModalBackdrop>,
      modalPortal
    );
  }
}
