import "./BookStatus.css";

function BookStatus() {
  return (
    <div className="dropdown">
      <button className="dropbtn">Want To Read</button>
      <div className="dropdown-content">
        <form>
          <div className="dropdown-item">
            <label className="status-label">
              <input
                className="radio-button"
                type="radio"
                id="wanttoread"
                name="radio"
                value="WantToRead"
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
