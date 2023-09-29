import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { addBook } from '../redux/books/booksSlice';

const Form = () => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const onAuthorChange = (e) => setAuthor(e.target.value);
  const onTitleChange = (e) => setTitle(e.target.value);

  const addNewBook = () => {
    if (author && title) {
      dispatch(
        addBook({
          item_id: nanoid(),
          author,
          title,
        }),
      );
    }
  };

  return (
    <form method="post">
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={onTitleChange}
        placeholder="Enter your Title"
      />
      <input
        type="text"
        id="author"
        name="author"
        value={author}
        onChange={onAuthorChange}
        placeholder="Enter your Author"
      />
      <button type="button" onClick={addNewBook}>Add Book</button>
    </form>
  );
};

export default Form;
