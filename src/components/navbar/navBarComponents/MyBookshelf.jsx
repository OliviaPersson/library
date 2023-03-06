import BookList from "../../bookList/BookList";
import "./MyBookshelf.css";

function MyBookshelf({ books }) {
  return (
    <div className="page-content-container">
      <h1 className="page-header">My Bookshelf</h1>
      <BookList books={books} />
    </div>
  );
}

export default MyBookshelf;
