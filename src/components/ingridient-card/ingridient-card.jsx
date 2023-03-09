import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ingridient-card.module.css';
import PropTypes from 'prop-types';

const IngridientCard = ({ image, price, name, id, openModalHandle }) => {
  const openModal = () => {
    openModalHandle(id);
  };
  return (
    <button className={styles.IngridientCard} onClick={openModal}>
      <div className={`pl-4 pr-4 ${styles.imageContainer}`}>
        <img src={image} className={styles.image} alt={name} />
      </div>
      <div className={`pt-1 pb-1 ${styles.currencyContainer}`}>
        <p className="text text_type_digits-default">{price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`text text_type_main-default ${styles.name}`}>{name}</p>
      <Counter count={1} size="default" extraClass="m-1" />
    </button>
  );
};

IngridientCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  openModalHandle: PropTypes.func.isRequired,
};

export default IngridientCard;
