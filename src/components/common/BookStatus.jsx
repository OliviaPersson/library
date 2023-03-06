import React from "react";
import "./BookStatus.css";

function BookStatus() {
  //   const [bookStatus, setBookStatus] = React.useState("");

  //   const handleOptionChange = (e) => {
  //     setBookStatus(e.target.value);
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    //setBookStatus(e.target.value);
    //console.log(bookStatus);
  };

  return (
    <div className="dropdown">
      <button className="dropbtn">Want To Read</button>
      <div className="dropdown-content">
        <form onSubmit={handleSubmit}>
          <div className="dropdown-item">
            <label className="status-label">
              <input
                className="radio-button"
                type="radio"
                id="wanttoread"
                name="radio"
                value="WantToRead"
                // checked={bookStatus === "WantToRead"}
                // onChange={handleOptionChange}
              />
              Want To Read
            </label>
          </div>
          <div className="dropdown-item">
            <label className="status-label">
              <input
                className="radio-button"
                type="radio"
                id="currentlyreading"
                name="radio"
                value="CurrentlyReading"
                // checked={bookStatus === "CurrentlyReading"}
                // onChange={handleOptionChange}
              />
              Currently Reading
            </label>
          </div>
          <div className="dropdown-item">
            <label className="status-label">
              <input
                className="radio-button"
                type="radio"
                id="read"
                name="radio"
                value="Read"
                // checked={bookStatus === "Read"}
                // onChange={handleOptionChange}
              />
              Read
            </label>
          </div>
          <div className="submit-button">
            <input className="submit" type="submit" value="Done"></input>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookStatus;
