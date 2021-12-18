import React from 'react';

import ListController from './list-controller/ListController';

import styles from './ListFooter.module.css';

const ListFooter = () => {
  return (
    <div className={styles.footer}>
      <div>5 items left</div>
      <ListController platform="mobile" />
      <div className={styles.clear}>Clear Completed</div>
    </div>
  );
};

export default ListFooter;
