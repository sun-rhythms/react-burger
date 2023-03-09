import styles from './burger-constructor.module.css';
import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import Order from '../order/order';
import PropTypes from 'prop-types';

const BurgerConstructor = ({ constructorIngridients, openModalHandle }) => {
  const bun = constructorIngridients.filter(
    (ingridient) => ingridient.type === 'bun'
  )[0];
  const innerBurger = constructorIngridients.filter(
    (ingridient) => ingridient.type === 'main'
  );
  return (
    <section className={`pl-4 pr-4 ${styles.BurgerConstructorContainer}`}>
      <div className={` ${styles.constructorElementsContainer}`}>
        <div className={styles.constuctorElementLayout}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={bun?.image}
          />
        </div>
        <div
          className={`custom-scroll ${`${styles.centralIngridientsContainer}`}`}
        >
          {innerBurger.map((ingridient) => (
            <div
              className={styles.constuctorElementContainerCenter}
              key={ingridient._id}
            >
              <DragIcon type="primary" />
              <ConstructorElement
                isLocked={false}
                text={ingridient.name}
                price={ingridient.price}
                thumbnail={ingridient.image}
              />
            </div>
          ))}
        </div>
        <div className={styles.constuctorElementLayout}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={bun?.image}
          />
        </div>
      </div>
      <Order openModalHandle={openModalHandle} />
    </section>
  );
};

BurgerConstructor.propTypes = {
  constructorIngridients: PropTypes.array.isRequired,
  openModalHandle: PropTypes.func.isRequired,
};

export default BurgerConstructor;
