import React from "react";
import BookListItem from "./BookListItem";
import "./BookList.css";

function BookList({ books }) {
  return (
    <div className="main-content-container">
      <hr />
      <div className="books-container">
        {books?.map((book) => {
          return <BookListItem key={book.id} book={book} />;
        })}
      </div>
    </div>
  );
}

export default BookList;
