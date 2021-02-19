import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Preloader.module.css';
import {Spin} from "antd";

const Preloader = (props) => {
  return (
    <div styleName="preloader-container">
      <br/><br/>
      <Spin size="large" />
    </div>
  );
}

export default CSSModules(Preloader, styles, { allowMultiple: true, handleNotFoundStyleName: 'ignore' });
