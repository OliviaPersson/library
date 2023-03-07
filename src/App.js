import React from "react";
import axios from "axios";
import Header from "./components/Header";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import MyBookshelf from "./components/navbar/navBarComponents/MyBookshelf";
import CurrentlyReading from "./components/navbar/navBarComponents/CurrentlyReading";
import Read from "./components/navbar/navBarComponents/Read";
import Favourites from "./components/navbar/navBarComponents/Favourites";
import BookDetailPage from "./components/BookDetailPage";
import { Route, Routes } from "react-router-dom";
import { Context } from "./context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [data, setData] = React.useState([]);
  const [wantToReadBooks, setWantToReadBooks] = React.useState([]);
  const [currentlyReadingBooks, setCurrentlyReadingBooks] = React.useState([]);
  const [readBooks, setReadBooks] = React.useState([]);

  React.useEffect(() => {
    axios.get("https://localhost:7101/api/Books").then((response) => {
      setData(response.data);
      setWantToReadBooks(
        response.data.filter((book) => {
          return book.status === "WantToRead";
        })
      );
      setCurrentlyReadingBooks(
        response.data.filter((book) => {
          return book.status === "CurrentlyReading";
        })
      );
      setReadBooks(
        response.data.filter((book) => {
          return book.status === "Read";
        })
      );
    });
  }, []);

  function handleSave(id) {
    setData((prevState) =>
      prevState.map((obj) =>
        obj.id === id ? { ...obj, isSaved: !obj.isSaved } : obj
      )
    );
  }

  function handleStatusChange(book, bookStatus) {
    const data = {
      id: book.id,
      author: book.author,
      imageLink: book.imageLink,
      language: book.language,
      link: book.link,
      pages: book.pages,
      title: book.title,
      year: book.year,
      releaseDate: book.releaseDate,
      format: book.format,
      ISBN: book.ISBN,
      isSaved: book.isSaved,
      status: bookStatus,
      description: book.description,
    };

    console.log(data);

    axios
      .put(`https://localhost:7101/api/Books/${book.id}`, data)
      .then((response) => {
        toast.success("Changes saved successfully!", {
          className: "toast-message",
          hideProgressBar: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <React.Fragment>
      <ToastContainer />
      <div className="app-container">
        <NavBar />
        <Header />
        <Context.Provider value={data}>
          <Routes>
            <Route
              path="/"
              element={<MyBookshelf books={wantToReadBooks} />}
            ></Route>
            <Route
              path="/currently-reading"
              element={<CurrentlyReading books={currentlyReadingBooks} />}
            ></Route>
            <Route path="/read" element={<Read books={readBooks} />}></Route>
            <Route path="/favourites" element={<Favourites />}></Route>
            <Route
              path="/book/:id"
              element={
                data.length !== 0 ? (
                  <BookDetailPage
                    handleStatusChange={handleStatusChange}
                    handleSave={handleSave}
                  />
                ) : null
              }
            ></Route>
            <Route path="/not-found" component={NotFound}></Route>
          </Routes>
        </Context.Provider>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
