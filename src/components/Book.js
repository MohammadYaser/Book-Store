import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();

  const onRemoveClick = () => {
    dispatch(deleteBook(id));
  };

  return (
    <li>
      <div>
        <span>Book title :</span>
        {title}
      </div>
      <div>

        <span>Author :</span>
        {author}

      </div>
      <div>

        <span>Category :</span>
        {category}

      </div>
      <button type="button" onClick={onRemoveClick}>
        Remove
      </button>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Book;
