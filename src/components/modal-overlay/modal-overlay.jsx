import { createPortal } from 'react-dom';
import styles from './modal-overlay.module.css';

import PropTypes from 'prop-types';

const ModalOverlay = ({ children, closeModalHandle }) => {
  const closeModal = (e) => {
    if (e.target.id === 'overlay') {
      closeModalHandle();
    }
  };
  const modalRoot = document.getElementById('modal');
  return createPortal(
    <div id={'overlay'} className={styles.modalOverlay} onClick={closeModal}>
      {children}
    </div>,
    modalRoot
  );
};

ModalOverlay.propTypes = {
  children: PropTypes.node.isRequired,
  closeModalHandle: PropTypes.func.isRequired,
};

export default ModalOverlay;
