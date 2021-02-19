import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './TextField.module.css';
import {Input} from "antd";

const TextField = (props) => {
  return (
    <Input styleName="text-field" id="y-text" type="text"
      value={props.value} onChange={(e) => props.changeValue(e.target.value)}
      maxLength={props.maxLength} placeholder={props.placeholder} />
  );
}

export default CSSModules(TextField, styles, { allowMultiple: true, handleNotFoundStyleName: 'ignore' });
