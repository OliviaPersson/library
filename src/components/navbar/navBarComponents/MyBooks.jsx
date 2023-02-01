import BookList from "../../bookList/BookList";
import "./MyBooks.css";

function MyBooks({ books }) {
  return (
    <div className="page-content-container">
      <h1 className="page-header">My Books</h1>
      <BookList books={books} />
    </div>
  );
}

export default MyBooks;
