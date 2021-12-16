import React from 'react';

import styles from './TodoHeader.module.css';

const TodoHeader = () => {
  const theme = document.querySelector(':root').className;
  return (
    <div className={styles.header}>
      <p className={styles.logo}>todo</p>
      <button>
        <img
          src={
            theme === 'dark-theme'
              ? '../../../images/icon-sun.svg'
              : '../../../images/icon-moon.svg'
          }
          alt=""
        />
      </button>
    </div>
  );
};

export default TodoHeader;
