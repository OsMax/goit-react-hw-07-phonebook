import { configureStore } from '@reduxjs/toolkit';
import { phonesReducer } from './phonesSlice';
import { findReducer } from './findSlice';

export const store = configureStore({
  reducer: {
    phones: phonesReducer,
    filter: findReducer,
  },
});
