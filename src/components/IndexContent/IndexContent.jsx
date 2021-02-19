import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './IndexContent.module.css';
import AuthSection from './AuthSection/AuthSection';

const IndexContent = (props) => {
  return (
    <main styleName="main-container">
      <h1 className="visually-hidden">Lab 4 - Login Page</h1>
      <AuthSection />
    </main>
  );
}

export default CSSModules(IndexContent, styles, { allowMultiple: true, handleNotFoundStyleName: 'ignore' });
