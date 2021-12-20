import { createSlice } from '@reduxjs/toolkit';
import { unstable_batchedUpdates } from 'react-dom';

const localStorageTodos = JSON.parse(localStorage.getItem('todoList'));

if (!localStorageTodos) {
  const initalTodos = {
    todos: [
      {
        id: 'l1',
        text: 'Complete online JavaScript course',
        completed: true,
      },
      {
        id: 'l2',
        text: 'Jog around the park 3x',
        completed: false,
      },
      {
        id: 'l3',
        text: '10 minutes meditation',
        completed: false,
      },
      {
        id: 'l4',
        text: 'Read for 1 hour',
        completed: false,
      },
      {
        id: 'l5',
        text: 'Pick up Grocerries',
        completed: false,
      },
      {
        id: 'l6',
        text: 'Complete Todo App on Fronted Mentor',
        completed: false,
      },
    ],
  };

  localStorage.setItem('todoList', JSON.stringify(initalTodos));
}

const initialState =
  JSON.parse(localStorage.getItem('todoList')) !== null
    ? JSON.parse(localStorage.getItem('todoList'))
    : { todos: [] };

const listSlice = createSlice({
  name: 'todolist',
  initialState,
  reducers: {
    addTodo(state, action) {
      const newTodo = action.payload;
      state.todos.push(newTodo);
      localStorage.setItem('todoList', JSON.stringify(state));
    },
    deleteTodo(state, action) {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
      localStorage.setItem('todoList', JSON.stringify(state));
    },
    toggleCheck(state, action) {
      const id = action.payload;
      state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      localStorage.setItem('todoList', JSON.stringify(state));
    },
    clearCompleted(state) {
      state.todos = state.todos.filter((todo) => todo.completed === false);
      localStorage.setItem('todoList', JSON.stringify(state));
    },

    dragAndDropSave(state, action) {
      console.log('save');
      console.log(action.payload);

      state.todos = action.payload;
      localStorage.setItem('todoList', JSON.stringify(state));
    },
  },
});

export const listActions = listSlice.actions;

export default listSlice;
