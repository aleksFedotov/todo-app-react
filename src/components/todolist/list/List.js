import React from 'react';
import { useSelector } from 'react-redux';

import LIstItem from './list-item/LIstItem';
import Card from '../../UI/card/Card';
import ListFooter from '../footer/ListFooter';

import styles from './List.module.css';

const List = () => {
  // Get todos amd status from the store
  let todos = useSelector((state) => state.todolist.todos);
  const status = useSelector((state) => state.status.status);

  // Count items left
  const itemsLeft = todos.filter((todo) => todo.completed === false).length;

  // handling list controllers
  if (status === 'All') {
    // Sort array so checked todos come first
    const arrayForSort = [...todos];
    arrayForSort.sort((a, b) => b.completed - a.completed);
    todos = arrayForSort;
  } else if (status === 'Active') {
    todos = todos.filter((todo) => todo.completed === false);
  } else {
    todos = todos.filter((todo) => todo.completed === true);
  }

  return (
    <Card className={styles['m-22']}>
      <div className={styles.list_box}>
        <ul>
          {todos.map((item) => (
            <LIstItem
              key={item.id}
              id={item.id}
              text={item.text}
              completed={item.completed}
            />
          ))}
        </ul>
        <div></div>
      </div>
      <ListFooter itemsLeft={itemsLeft} />
    </Card>
  );
};

export default List;
