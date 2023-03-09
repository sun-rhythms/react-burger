import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './modal.module.css';
import PropTypes from 'prop-types';

const Modal = ({ children, title, closeModalHandle }) => {
  return (
    <div className={styles.modal}>
      <div className={`pl-10 pr-10 pt-10 ${styles.closeIconContainer}`}>
        <p className={`text text_type_main-large ${styles.title}`}>{title}</p>
        <button className={styles.button}>
          <CloseIcon type="primary" onClick={closeModalHandle} />
        </button>
      </div>
      {children}
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  closeModalHandle: PropTypes.func.isRequired,
};

export default Modal;
