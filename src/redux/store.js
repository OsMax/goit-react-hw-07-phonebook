import { configureStore } from '@reduxjs/toolkit';
import { phonesReducer } from './phonesSlice';
import { findSlice } from './findSlice';

export const store = configureStore({
  reducer: {
    phones: phonesReducer,
    filter: findSlice.reducer,
  },
});
