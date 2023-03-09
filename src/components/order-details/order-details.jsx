import styles from './order-details.module.css';
import doneImg from '../../images/done.png';

const OrderDetails = () => {
  return (
    <div className={styles.orderDetailsContainer}>
      <p className={`text text_type_digits-large ${styles.orderNumber}`}>
        034536
      </p>
      <p className="text text_type_main-medium pt-8 pb-15">
        идентификатор заказа
      </p>
      <img src={doneImg} alt="done" className={styles.image} />
      <p className="text text_type_main-default pt-15 pb-2">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive pb-30">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
};

export default OrderDetails;
