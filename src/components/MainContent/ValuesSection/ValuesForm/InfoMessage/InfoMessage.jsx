import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './InfoMessage.module.css';
import {Alert} from "antd";

const InfoMessage = (props) => {
  return (
    <Alert message={props.message} type="warning"/>
  );
}

export default CSSModules(InfoMessage, styles, {allowMultiple: true, handleNotFoundStyleName: 'ignore'});
