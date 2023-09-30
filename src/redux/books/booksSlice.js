import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const API_ID = 'P1p3Rj0mhOetft2xpzhW/';

const fetchData = async (endpoint, data = null) => {
  if (data) {
    const res = await axios.post(endpoint, data);
    return res.data;
  }
  const res = await axios.get(endpoint);
  return res.data;
};

const fetchBooksList = createAsyncThunk('books/fetchBooksList', async () => fetchData(`${API_URL}${API_ID}books`));

const newBook = createAsyncThunk('books/newBook', async (book) => {
  const response = await fetchData(`${API_URL}${API_ID}books`, book);
  if (response === 'Created') {
    return book;
  }
  throw new Error('Unable to add record!');
});

const deleteBook = createAsyncThunk('books/deleteBook', async (ITEM_ID) => {
  try {
    await axios.delete(`${API_URL}${API_ID}books/${ITEM_ID}`);
    return ITEM_ID;
  } catch (error) {
    throw new Error('Unable to remove record!');
  }
});

export const initBooks = createAsyncThunk('books/initBooks', async () => fetchData(`${API_URL}${API_ID}books`));

const initialState = {
  books: [],
  error: '',
  status: 'idle',
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooksList.fulfilled, (state, action) => {
        state.status = 'succeeded';
        if (action.payload !== '') {
          const keys = Object.keys(action.payload);
          const books = [];
          keys.forEach((bookId) => {
            books.push({ item_id: bookId, ...action.payload[bookId][0] });
          });
          state.books = books;
          if (state.books.length === 0) state.error = 'No result was found!';
        } else {
          state.error = 'No result was found!';
        }
      })
      .addCase(fetchBooksList.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });

    builder
      .addCase(newBook.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(newBook.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = '';
        state.books.push(action.payload);
      })
      .addCase(newBook.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });

    builder
      .addCase(deleteBook.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = '';
        state.books = state.books.filter((book) => book.item_id !== action.payload);
        if (state.books.length === 0) state.error = 'No result was found!';
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });

    builder
      .addCase(initBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(initBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const keys = Object.keys(action.payload);
        const books = [];
        keys.forEach((bookId) => {
          books.push({ item_id: bookId, ...action.payload[bookId][0] });
        });
        state.books = books;
        if (state.books.length === 0) state.error = 'No result was found!';
      })
      .addCase(initBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export { newBook, fetchBooksList, deleteBook };
export default booksSlice.reducer;
