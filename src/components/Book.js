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
    <li className="book-card">
      <div className="card-container">
        <div className="book-container">
          <h6>{category}</h6>
          <p className="title">{title}</p>
          <p className="author-title">{author}</p>
          <ul className="btn-ul">
            <li>
              <button type="button" className="book-btn def">Comments</button>
            </li>
            <li>
              <button type="button" className="book-btn" onClick={onRemoveClick}>Remove</button>
            </li>
            <li>
              <button type="button" className="book-btn">Edit</button>
            </li>
          </ul>
        </div>
        <div className="circle-persantage">
          <div className="circle" />
          <div className="per">
            <p className="persantage">100%</p>
            <p className="completed">Completed</p>
          </div>
        </div>
        <span className="boderline" />
        <div className="chapter-container">
          <h5 className="chapter-h">CURRENT CHAPTER</h5>
          <p className="chapter-title">Chapter 17</p>
          <button type="button" className="update-btn">UPDATE PROGRESS</button>
        </div>
      </div>
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
