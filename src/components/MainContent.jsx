import "./MainContent.css";
import theWish from "../images/the-wish.png";
import enEndaOnskan from "../images/en-enda-onskan.png";

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
        <div className="card-container">
          <img src={enEndaOnskan} />
          <div className="book-data">
            <p className="title">Fairy tales</p>
            <p className="author">Hans Christian Andersen</p>
          </div>
        </div>
        <div className="card-container">
          <img src={theWish} />
          <div className="book-data">
            <p className="title">Things Fall Apart</p>
            <p className="author">Chinua Achebe</p>
          </div>
        </div>
        <div className="card-container">
          <img src={enEndaOnskan} />
          <div className="book-data">
            <p className="title">Fairy tales</p>
            <p className="author">Hans Christian Andersen</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
