import { createSlice } from '@reduxjs/toolkit';

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
        text: 'Read for 1 hour',
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
      state.todos.push(action.payload);
      localStorage.setItem('todoList', JSON.stringify(state));
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem('todoList', JSON.stringify(state));
    },
    toggleCheck(state, action) {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      localStorage.setItem('todoList', JSON.stringify(state));
    },
    clearCompleted(state) {
      state.todos = state.todos.filter((todo) => todo.completed === false);
      localStorage.setItem('todoList', JSON.stringify(state));
    },
  },
});

export const listActions = listSlice.actions;

export default listSlice;
