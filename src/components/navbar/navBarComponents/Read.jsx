import BookList from "./../../bookList/BookList";
import "./Read.css";

function Read({ books }) {
  return (
    <div className="page-content-container">
      <h1 className="page-header">Read</h1>
      <BookList books={books} />
    </div>
  );
}

export default Read;
