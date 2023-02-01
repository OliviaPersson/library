import BookList from "../../bookList/BookList";
import "./MyBooks.css";

function MyBooks() {
  return (
    <div className="page-content-container">
      <h1 className="page-header">My Books</h1>
      <BookList />
    </div>
  );
}

export default MyBooks;
