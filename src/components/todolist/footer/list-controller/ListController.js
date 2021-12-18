import React, { useState } from 'react';

import styles from './ListController.module.css';

const ListController = (props) => {
  const [status, setStatus] = useState('All');

  const statusHandler = (event) => {
    setStatus(event.target.innerText);
  };
  return (
    <div
      className={`${styles['list-controllers']} ${styles[`${props.platform}`]}`}
    >
      <div
        className={status === 'All' && styles.active}
        onClick={statusHandler}
      >
        All
      </div>
      <div
        className={status === 'Active' && styles.active}
        onClick={statusHandler}
      >
        Active
      </div>
      <div
        className={status === 'Completed' && styles.active}
        onClick={statusHandler}
      >
        Completed
      </div>
    </div>
  );
};

export default ListController;
