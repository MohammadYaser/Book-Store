import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import Form from './Form';

const bookList = [
  { id: uuidv4(), title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { id: uuidv4(), title: 'Gone with the Wind', author: 'Margaret Mitchell' },
  { id: uuidv4(), title: 'The Grapes of Wrath', author: 'John Steinbeck' },
];

const Books = () => (
  <div className="book-card">
    <ul className="book-ul">
      {bookList.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
        />
      ))}
    </ul>
    <Form />
  </div>
);

export default Books;
