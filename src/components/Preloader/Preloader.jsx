import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Preloader.module.css';

const Preloader = (props) => {
  return (
    <div styleName="preloader-container">
      Грузимся...
    </div>
  );
}

export default CSSModules(Preloader, styles, { allowMultiple: true, handleNotFoundStyleName: 'ignore' });
