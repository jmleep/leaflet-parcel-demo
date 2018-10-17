import React from 'react';
import Header from '../Header/Header';
import styles from './App.css';
import Map from '../Map/Map';

document.body.style.margin = 0;

const App = () => (
  <div className={styles.app}>
    <Header />
    <Map />
  </div>
);

export default App;
