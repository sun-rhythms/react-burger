import styles from './product-characteristic.module.css';

import PropTypes from 'prop-types';

const ProductCharacteristic = ({ title, charType }) => {
  return (
    <div className={styles.characteristic}>
      <p className="text text_type_main-default">{title}</p>
      <p className="text text_type_digits-default">{charType}</p>
    </div>
  );
};

ProductCharacteristic.propTypes = {
  title: PropTypes.string,
  charType: PropTypes.string,
};

export default ProductCharacteristic;
