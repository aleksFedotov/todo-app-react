import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import LIstItem from './list-item/LIstItem';
import Card from '../../UI/card/Card';
import ListFooter from '../footer/ListFooter';
import { listActions } from '../../store/list';

import styles from './List.module.css';

const List = () => {
  const dispatch = useDispatch();

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

  const onDragEndHandler = (result) => {
    const { destination, source } = result;
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const todosUpdated = Array.from(todos);
    const [reorderedTodo] = todosUpdated.splice(source.index, 1);
    todosUpdated.splice(destination.index, 0, reorderedTodo);

    dispatch(listActions.dragAndDropSave(todosUpdated));
  };

  return (
    <Card className={styles['m-22']}>
      <div className={styles.list_box}>
        <DragDropContext onDragEnd={onDragEndHandler}>
          <Droppable droppableId="todoList">
            {(provided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {todos.map((item, index) => (
                  <LIstItem
                    key={item.id}
                    id={item.id}
                    text={item.text}
                    completed={item.completed}
                    index={index}
                  />
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <ListFooter itemsLeft={itemsLeft} />
    </Card>
  );
};

export default List;
