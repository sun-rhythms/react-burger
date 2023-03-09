import styles from './header-menu-button.module.css';
import PropTypes from 'prop-types';

const HeaderMenuButton = ({ children, buttonText }) => {
  return (
    <button className={`pl-5 pr-5 ${styles.menuButtonContainer}`}>
      {children}
      <p className={`ml-2 text text_type_main-default`}>{buttonText}</p>
    </button>
  );
};

HeaderMenuButton.propTypes = {
  children: PropTypes.node,
  buttonText: PropTypes.string,
};

export default HeaderMenuButton;
