import React from 'react';

import LIstItem from './list-item/LIstItem';
import Card from '../../UI/card/Card';

import styles from './List.module.css';

const DUMMY_DATA = [
  {
    id: 'l1',
    text: 'Complete on;ine JavaScript course',
    compeleted: true,
  },
  { id: 'l2', text: 'Jog around the park 3x', compeleted: false },
  { id: 'l3', text: '10 minutes meditation', compeleted: false },
  { id: 'l4', text: 'Read for 1 hour', compeleted: false },
  { id: 'l5', text: 'Pick up groceries', compeleted: false },
  { id: 'l6', text: 'Complete Todo App on Fronted Mentor', compeleted: false },
];

const List = () => {
  return (
    <Card className={styles['m-22']}>
      <div className={styles.list_box}>
        <ul>
          {DUMMY_DATA.map((item) => (
            <LIstItem
              key={item.id}
              id={item.id}
              text={item.text}
              completed={item.compeleted}
            />
          ))}
        </ul>
        <div></div>
      </div>
    </Card>
  );
};

export default List;
