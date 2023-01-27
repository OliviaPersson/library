import { Link } from "react-router-dom";
import "./BookListItem.css";

function BookListItem({ book }) {
  return (
    <div className="card-container">
      <Link to={book.id}>
        <img className="book-image" src={book.imageLink} />
      </Link>
      <div className="book-data">
        <p className="title">{book.title}</p>
        <p className="author-header">{book.author}</p>
      </div>
    </div>
  );
}

export default BookListItem;
