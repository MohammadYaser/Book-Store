import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { newBook } from '../redux/books/booksSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onAuthorChange = (e) => {
    setAuthor(e.target.value);
  };
  const onCatagoryChange = (e) => {
    setCategory(e.target.value);
  };
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(newBook({
      item_id: nanoid(),
      author,
      category,
      title,
    }));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  const categoriesList = [
    'Romance', 'Historical', 'Memoir', 'Classic', 'Action',
  ];

  return (
    <form onSubmit={submitForm}>
      <input type="text" value={title} onChange={onTitleChange} placeholder="Enter Book title" required />
      <input type="text" value={author} onChange={onAuthorChange} placeholder="Enter Author Name" required />
      <select value={category} onChange={onCatagoryChange} required>
        <option value="" disabled>Select a category</option>
        {categoriesList.map((catag) => (
          <option key={catag} value={catag}>{catag}</option>
        ))}
      </select>
      <button type="submit">ADD BOOK</button>
    </form>
  );
};

export default Form;
