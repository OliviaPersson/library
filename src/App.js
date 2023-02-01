import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import MyBooks from "./components/navbar/navBarComponents/MyBooks";
import CurrentlyReading from "./components/navbar/navBarComponents/CurrentlyReading";
import Read from "./components/navbar/navBarComponents/Read";
import Favourites from "./components/navbar/navBarComponents/Favourites";
import BookDetailPage from "./components/BookDetailPage";
import "./App.css";

function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3000/data.json")
      .then((response) => response.json())
      .then((data) => setData({ data }))
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  function handleSave(id) {
    setData((prevState) => {
      return {
        data: prevState.data.map((obj) => {
          return obj.id === id ? { ...obj, isSaved: !obj.isSaved } : obj;
        }),
      };
    });
  }

  return (
    <React.Fragment>
      <div className="app-container">
        <NavBar />
        <Header />
        <Routes>
          <Route path="/" element={<MyBooks books={data.data} />}></Route>
          <Route
            path="/currently-reading"
            element={<CurrentlyReading />}
          ></Route>
          <Route path="/read" element={<Read />}></Route>
          <Route path="/favourites" element={<Favourites />}></Route>
          <Route
            path="/book/:id"
            element={
              data.length !== 0 ? (
                <BookDetailPage books={data.data} handleSave={handleSave} />
              ) : null
            }
          ></Route>
          <Route path="/not-found" component={NotFound}></Route>
        </Routes>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
