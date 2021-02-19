import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Header.module.css';
import Logout from './Logout/Logout';

const Header = (props) => {
  const handleLogout = (e) => {
    e.preventDefault();
    props.logout();
  }

  return (
    <header styleName="main-header" className="theme">
      {props.loggedUser && <Logout action={handleLogout} />}
      <ul styleName="main-header__content info">
        <li styleName="info__item">Lab 4</li>
      </ul>
      <ul styleName="main-header__content authors">
        <li styleName="authors__item">Глеб Макаров (P3210)</li>
      </ul>
    </header>
  );
}

export default CSSModules(Header, styles, { allowMultiple: true, handleNotFoundStyleName: 'ignore' });
