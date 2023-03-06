import BookList from "./../../bookList/BookList";
import "./CurrentlyReading.css";

function CurrentlyReading({ books }) {
  return (
    <div className="page-content-container">
      <h1 className="page-header">Currently Reading</h1>
      <BookList books={books} />
    </div>
  );
}

export default CurrentlyReading;
