import React from 'react';
import Header from '../Header/Header';
import styles from './App.css';

document.body.style.margin = 0;

const App = () => (
  <div className={styles.app}>
    <Header />
    <br />
    <div className={styles.body}>
      <div className={styles.bodyItem}>Content Example </div>
    </div>
  </div>
);

export default App;
