import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'All',
};

const statusSlice = createSlice({
  name: 'todolist',
  initialState,
  reducers: {
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const statusActions = statusSlice.actions;

export default statusSlice;
