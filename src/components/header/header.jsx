import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import HeaderMenuButton from '../header-menu-button/header-menu-button';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={`pt-4 pb-4 ${styles.header}`}>
      <nav className={styles.headerContainer}>
        <div className={styles.leftMenuItems}>
          <HeaderMenuButton buttonText="Конструктор">
            <BurgerIcon type="primary" />
          </HeaderMenuButton>
          <HeaderMenuButton buttonText="Лента заказов">
            <ListIcon type="secondary" />
          </HeaderMenuButton>
        </div>
        <Logo />
        <div className={styles.rightMenuItems}>
          <HeaderMenuButton buttonText="Личный кабинет">
            <ProfileIcon type="secondary" />
          </HeaderMenuButton>
        </div>
      </nav>
    </header>
  );
};

export default Header;
