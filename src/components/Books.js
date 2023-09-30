import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { initBooks } from '../redux/books/booksSlice';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  useEffect(() => {
    dispatch(initBooks());
  }, [dispatch]);

  return (
    <>
      <ul className="books">
        {books.map((book) => (
          <Book
            key={book.item_id}
            author={book.author}
            title={book.title}
            category={book.category}
            id={book.item_id}
          />
        ))}
      </ul>
      <Form />
    </>
  );
};

export default Books;
