import ProductCharacteristic from '../product-characteristic/product-characteristic';
import styles from './ingredient-details.module.css';
import PropTypes from 'prop-types';

const IngredientDetails = ({ ingredient }) => {
  return (
    <div className={`ml-10 mr-10 mb-15 ${styles.ingredientDetailsProps}`}>
      <div className={`${styles.imageContainer}`}>
        <img
          src={ingredient?.image}
          className={styles.image}
          alt={ingredient?.name}
        />
      </div>
      <p className="text text_type_main-medium pt-4 pb-8">{ingredient?.name}</p>
      <div className={`text_color_inactive ${styles.characteristics}`}>
        <ProductCharacteristic
          title="Калории, ккал"
          charType={ingredient?.calories}
        />
        <ProductCharacteristic
          title="Белки, г"
          charType={ingredient?.proteins}
        />
        <ProductCharacteristic title="Жиры, г" charType={ingredient?.fat} />
        <ProductCharacteristic
          title="Углеводы, г"
          charType={ingredient?.carbohydrates}
        />
      </div>
    </div>
  );
};

IngredientDetails.propTypes = {
  ingredient: PropTypes.object.isRequired,
};

export default IngredientDetails;
