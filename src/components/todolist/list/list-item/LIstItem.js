import React from 'react';

import styles from './ListItem.module.css';
import { ReactComponent as Check } from '../../../../images/icon-check.svg';
import { ReactComponent as Cross } from '../../../../images/icon-cross.svg';

const LIstItem = (props) => {
  return (
    <li className={styles.todo}>
      <div
        className={
          props.completed ? `${styles.circle} ${styles.checked}` : styles.circle
        }
      >
        {props.completed ? <Check /> : ''}
      </div>
      <p className={styles.text}>{props.text}</p>
      <button className={styles['delete-btn']}>{<Cross />}</button>
    </li>
  );
};

export default LIstItem;
