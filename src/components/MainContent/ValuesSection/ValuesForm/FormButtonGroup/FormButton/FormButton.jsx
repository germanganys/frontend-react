import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './FormButton.module.css';
import {Button} from "antd";

const FormButton = (props) => {
  return (
    <Button styleName={(props.valueCurrent === props.value) ? "form-button form-button_active" : "form-button"}
      type="button" onClick={() => props.selectValue(props.value)}>
      {props.value}
    </Button>
  );
}

export default CSSModules(FormButton, styles, { allowMultiple: true, handleNotFoundStyleName: 'ignore' });
