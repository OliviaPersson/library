import "./BookDetailPage.css";

function BookDetailPage({ bookId }) {
  return (
    <div className="container">
      <p>{bookId}</p>
    </div>
  );
}

export default BookDetailPage;
