import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalViewer, ModalImg } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeByEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeByEsc);
  }

  closeByEsc = e => {
    if (e.code !== 'Escape') {
      return;
    }
    this.props.closeModal();
  };

  render() {
    const { closeModal, tags, modalImg } = this.props;

    return createPortal(
      <Overlay onClick={closeModal}>
        <ModalViewer>
          <ModalImg src={modalImg} alt={tags} />
        </ModalViewer>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  modalImg: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  tags: PropTypes.string.isRequired,
};
