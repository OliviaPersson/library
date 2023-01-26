import "./MainContent.css";
import theWish from "../images/the-wish.png";

function MainContent() {
  return (
    <div className="main-content-container">
      <hr />
      <div className="movies-container">
        <div className="card-container">
          <img src={theWish} />
          <div className="book-data">
            <p className="title">Things Fall Apart</p>
            <p className="author">Chinua Achebe</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
