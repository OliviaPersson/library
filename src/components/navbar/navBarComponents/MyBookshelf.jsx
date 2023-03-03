import BookList from "../../bookList/BookList";
import "./MyBookshelf.css";

function MyBookshelf() {
  return (
    <div className="page-content-container">
      <h1 className="page-header">My Bookshelf</h1>
      <BookList />
    </div>
  );
}

export default MyBookshelf;
