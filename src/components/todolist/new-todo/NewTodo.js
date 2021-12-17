import React from 'react';

import Card from '../../UI/card/Card';

import styles from './NewTodo.module.css';

const NewTodo = () => {
  return (
    <Card className={styles['m-50']}>
      <form className={styles['new-todo']}>
        <div className={styles.circle}></div>
        <input type="text" placeholder="Create a new todo..." />
      </form>
    </Card>
  );
};

export default NewTodo;
