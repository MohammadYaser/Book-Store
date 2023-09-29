import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';

const Book = (props) => {
  const { title, author, bookId } = props;
  const dispatch = useDispatch();
  const onBookDelete = (bookId) => {
    if (bookId) {
      dispatch(deleteBook(bookId));
    }
  };

  return (
    <li>
      <p>
        Book Title:
        {title}
      </p>
      <p>
        Book Autthor:
        {author}
      </p>
      <button className="btn-remove" type="button" onClick={() => onBookDelete(bookId)}>Remove</button>
    </li>
  );
};

Book.propTypes = {
  bookId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
