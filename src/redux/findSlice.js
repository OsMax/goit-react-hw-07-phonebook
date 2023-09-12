import { createSlice } from '@reduxjs/toolkit';

export const findSlice = createSlice({
  name: 'find',
  initialState: { filter: '' },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = findSlice.actions;
