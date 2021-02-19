import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './ErrorMessage.module.css';
import {Alert} from "antd";

const ErrorMessage = (props) => {
  return (
    props.message &&
    <Alert message={props.message} type="error"/>
  );
}

export default CSSModules(ErrorMessage, styles, { allowMultiple: true, handleNotFoundStyleName: 'ignore' });
