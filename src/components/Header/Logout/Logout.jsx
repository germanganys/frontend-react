import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Logout.module.css';
import { Button } from "antd";

const Logout = (props) => {
  return (
    <Button styleName="logout-link" href="/" onClick={(e) => props.action(e)}>
       Выйти
    </Button>
  );
}

export default CSSModules(Logout, styles, { allowMultiple: true, handleNotFoundStyleName: 'ignore' });
