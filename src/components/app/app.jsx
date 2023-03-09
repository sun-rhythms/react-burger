import BurgerIngridients from '../burger-ingridients/burger-ingridients';
import Header from '../header/header';
import styles from './app.module.css';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { useEffect, useState } from 'react';
import { getIngridientsFromServer } from '../../utils/api';
import ModalOverlay from '../modal-overlay/modal-overlay';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';

function App() {
  const [ingridients, setIngridients] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ingredientInModal, setIngredientInModal] = useState({});
  const [isOrderModal, setIsOrderModal] = useState(false);

  const openModalHandle = (id) => {
    console.log(id);
    if (id) {
      const ingredientById = ingridients.find(
        (ingredient) => ingredient._id === id
      );
      setIngredientInModal(ingredientById);
      setIsOrderModal(false);
    } else {
      setIsOrderModal(true);
    }

    setIsModalOpen(true);
  };

  const closeModalHandle = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    getIngridientsFromServer().then((ingredients) =>
      setIngridients(ingredients.data)
    );

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    });
  }, []);

  return (
    <div className={styles.app}>
      <Header />
      <h1 className={`pt-10 pb-5 text text_type_main-large ${styles.title}`}>
        Соберите бургер
      </h1>
      <main className={`${styles.main}`}>
        <BurgerIngridients
          ingridients={ingridients}
          openModalHandle={openModalHandle}
        />
        <BurgerConstructor
          constructorIngridients={ingridients}
          openModalHandle={openModalHandle}
        />
      </main>
      {isModalOpen && (
        <ModalOverlay closeModalHandle={closeModalHandle}>
          <Modal
            title={isOrderModal ? `` : `Детали ингредиента`}
            closeModalHandle={closeModalHandle}
          >
            {isOrderModal ? (
              <OrderDetails />
            ) : (
              <IngredientDetails ingredient={ingredientInModal} />
            )}
          </Modal>
        </ModalOverlay>
      )}
    </div>
  );
}

export default App;
