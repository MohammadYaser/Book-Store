import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/booksSlice';
import catagoriesReducer from './catagories/catagoriesSlice';

export const store = configureStore({
  reducer: {
    books: bookReducer,
    catagories: catagoriesReducer,
  },
});

export default store;
