import React from 'react';
import { useDispatch } from 'react-redux';

import styles from './ListItem.module.css';

import { listActions } from '../../../store/list';
import { ReactComponent as Check } from '../../../../images/icon-check.svg';

const LIstItem = (props) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(listActions.deleteTodo(props.id));
  };

  const toggleHandler = () => {
    dispatch(listActions.toggleCheck(props.id));
  };
  return (
    <li
      className={
        props.completed ? `${styles.todo} ${styles.checked}` : styles.todo
      }
    >
      <div className={styles.circle} onClick={toggleHandler}>
        {props.completed ? <Check /> : ''}
      </div>
      <p className={styles.text} onClick={toggleHandler}>
        {props.text}
      </p>
      <div className={styles['delete-btn']} onClick={deleteHandler}>
        &#x2573;
      </div>
    </li>
  );
};

export default LIstItem;
