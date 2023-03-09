import {
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './order.module.css';
import PropTypes from 'prop-types';

const Order = ({ openModalHandle }) => {
  const openModal = () => {
    openModalHandle();
  };
  return (
    <div className={`pt-10 pb-10 ${styles.order}`}>
      <p className={`pr-10 text text_type_digits-medium`}>
        610 <CurrencyIcon type="primary" />
      </p>

      <Button
        htmlType="button"
        type="primary"
        size="medium"
        onClick={openModal}
        extraClass={styles.buttonContainer}
      >
        Оформить заказ
      </Button>
    </div>
  );
};

Order.propTypes = {
  openModalHandle: PropTypes.func.isRequired,
};

export default Order;
