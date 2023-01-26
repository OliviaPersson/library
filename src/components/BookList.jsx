import React from "react";
import "./BookList.css";

function BookList() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3000/data.json")
      .then((response) => response.json())
      .then((data) => setData({ data }))
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  data.data?.map((bookData) => {
    console.log(bookData);
  });

  return (
    <div className="main-content-container">
      <hr />
      <div className="movies-container">
        {data.data?.map((bookData) => {
          return (
            <div key={bookData.id} className="card-container">
              <img className="book-image" src={bookData.imageLink} />
              <div className="book-data">
                <p className="title">{bookData.title}</p>
                <p className="author">{bookData.author}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BookList;
