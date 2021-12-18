import React from 'react';

import styles from './ListItem.module.css';
import { ReactComponent as Check } from '../../../../images/icon-check.svg';

const LIstItem = (props) => {
  return (
    <li
      className={
        props.completed ? `${styles.todo} ${styles.checked}` : styles.todo
      }
    >
      <div className={styles.circle}>{props.completed ? <Check /> : ''}</div>
      <p className={styles.text}>{props.text}</p>
      <div className={styles['delete-btn']}>&#x2573;</div>
    </li>
  );
};

export default LIstItem;
