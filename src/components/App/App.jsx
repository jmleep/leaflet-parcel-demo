import React from 'react';
import Header from '../Header/Header';
import styles from './App.css';

const App = () => (
  <div className={styles.app}>
    <Header />
    <div className={styles.body}> Content Example </div>
  </div>
);

export default App;
