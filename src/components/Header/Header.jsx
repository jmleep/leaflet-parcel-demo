import React from 'react';
import styles from './Header.css';

const Header = () => (
  <div>
    <div className={styles.header}>
      <span role="img" aria-label="chop">
        🔪
      </span>
      <span role="img" aria-label="chop">
        🚫
      </span>
      Chop Block
    </div>
  </div>
);

export default Header;
