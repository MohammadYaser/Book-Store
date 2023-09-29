import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllBooks } from '../redux/books/booksSlice';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const bookList = useSelector(selectAllBooks);
  const renderBooks = bookList.map((book) => (
    <Book
      bookId={book.item_id}
      key={book.item_id}
      title={book.title}
      author={book.author}
    />
  ));
  return (
    <div className="book-card">
      <ul className="book-ul">
        {renderBooks}
      </ul>
      <Form />
    </div>
  );
};

export default Books;
