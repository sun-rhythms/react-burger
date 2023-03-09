import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import IngridientCard from '../ingridient-card/ingridient-card';
import IngridientsList from '../ingridients-list/ingridients-list';
import styles from './burger-ingridients.module.css';
import PropTypes from 'prop-types';

const BurgerIngridients = ({ ingridients, openModalHandle }) => {
  const [current, setCurrent] = useState('one');

  const buns = ingridients.filter((ingridient) => ingridient.type === 'bun');
  const sauses = ingridients.filter(
    (ingridient) => ingridient.type === 'sauce'
  );
  const mains = ingridients.filter((ingridient) => ingridient.type === 'main');

  const tabHandle = (value) => {
    setCurrent(value);
    document.getElementById(value).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.ingridientsSection}>
      <div className={`pb-10 ${styles.tabs}`}>
        <Tab value="bun" active={current === 'bun'} onClick={tabHandle}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === 'sauce'} onClick={tabHandle}>
          Соусы
        </Tab>
        <Tab value="main" active={current === 'main'} onClick={tabHandle}>
          Начинки
        </Tab>
      </div>
      <div className={`${styles.menu} custom-scroll`}>
        <IngridientsList title="Булки" id={'bun'}>
          {buns?.map((bun) => {
            return (
              <IngridientCard
                key={bun._id}
                id={bun._id}
                image={bun.image}
                price={bun.price}
                name={bun.name}
                openModalHandle={openModalHandle}
              />
            );
          })}
        </IngridientsList>
        <IngridientsList title="Соусы" id={'sauce'}>
          {sauses?.map((sauce) => {
            return (
              <IngridientCard
                key={sauce._id}
                id={sauce._id}
                image={sauce.image}
                price={sauce.price}
                name={sauce.name}
                openModalHandle={openModalHandle}
              />
            );
          })}
        </IngridientsList>
        <IngridientsList title="Начинки" id={'main'}>
          {mains?.map((main) => {
            return (
              <IngridientCard
                key={main._id}
                id={main._id}
                image={main.image}
                price={main.price}
                name={main.name}
                openModalHandle={openModalHandle}
              />
            );
          })}
        </IngridientsList>
      </div>
    </section>
  );
};

BurgerIngridients.propTypes = {
  ingridients: PropTypes.array.isRequired,
  openModalHandle: PropTypes.func.isRequired,
};

export default BurgerIngridients;
