import React from 'react';
import styles from './Header.css';

const Header = () => (
  <div>
    <div className={styles.header}>
      Chop Block{' '}
      <span role="img" aria-label="knife">
        🔪
      </span>
    </div>
  </div>
);

export default Header;
