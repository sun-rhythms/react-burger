import styles from './ingridients-list.module.css';

import PropTypes from 'prop-types';

const IngridientsList = ({ title, children, id }) => {
  return (
    <>
      <h3 className="pb-6 text text_type_main-medium" id={id}>
        {title}
      </h3>{' '}
      <div className={`pr-4 pb-10 pl-4 ${styles.ingridientsList}`}>
        {children}
      </div>
    </>
  );
};

IngridientsList.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
};

export default IngridientsList;
