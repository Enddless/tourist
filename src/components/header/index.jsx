import css from './styles.module.scss';
import Logo from '../logo/index';
import Account from '../account';
import Lead from '../lead/index';

function Header() {
  return (
    <>
      <header className={css.header}>
        <Logo />
        <nav className={css.navigation}>
          <ul className={css.nav}>
            <li className={css.link}>Equipment</li>
            <li className={css.link}>About us</li>
            <li className={css.link}>Blog</li>
          </ul>
        </nav>
        <Account />
      </header>
      <Lead />
    </>
  );
}

export default Header;
