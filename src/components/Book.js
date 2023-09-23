import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author } = props;
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
      <button className="btn-remove" type="button">Remove</button>
    </li>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
