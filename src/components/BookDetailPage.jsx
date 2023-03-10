import React from "react";
import BookStatus from "./common/BookStatus";
import { useParams } from "react-router-dom";
import { Context } from "../context";
import Save from "./common/Save";
import "./BookDetailPage.css";

function BookDetailPage({ handleSave, handleStatusChange }) {
  const { id } = useParams();
  const books = React.useContext(Context);

  const book = books.find((book) => book.id === id);

  return (
    <div className="book-page-container">
      <div className="book-summary">
        <img className="image" src={book.imageLink} />
        <div className="book-data-text">
          <div className="book-title-container">
            <h1 className="book-title">{book.title}</h1>
            <BookStatus book={book} handleStatusChange={handleStatusChange} />
            {/* <Save onClick={() => handleSave(book.id)} isSaved={book.isSaved} /> */}
          </div>
          <p className="author">by {book.author}</p>
          <h3 className="description-heading">Description</h3>
          <p className="description">{book.description}</p>
        </div>
      </div>
      <hr className="detail-page-line" />
      <div className="book-details-container">
        <div className="book-details">
          <h4 className="book-details-header">Book Details</h4>
          <p>{book.format}</p>
          <p>Publisher: Sphere</p>
          <p>Language: {book.language}</p>
          <p>ISBN: {book.ISBN}</p>
        </div>
        <div className="author-description-container">
          <h4 className="about-author-header">About Author</h4>
          <p className="author-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BookDetailPage;
