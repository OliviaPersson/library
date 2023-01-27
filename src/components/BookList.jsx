import React from "react";
import BookListItem from "./BookListItem";
import "./BookList.css";

function BookList({ books, header }) {
  return (
    <div className="main-content-container">
      <h3 className="main-page-header">{header}</h3>
      <div className="books-container">
        {books?.map((book) => {
          return <BookListItem key={book.id} book={book} />;
        })}
      </div>
    </div>
  );
}

export default BookList;
