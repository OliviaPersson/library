import React from "react";
import BookListItem from "./BookListItem";
import { Context } from "../../context";
import "./BookList.css";

function BookList() {
  const books = React.useContext(Context);

  return (
    <div className="main-content-container">
      <div className="books-container">
        {books?.map((book) => {
          return <BookListItem key={book.id} book={book} />;
        })}
      </div>
    </div>
  );
}

export default BookList;
