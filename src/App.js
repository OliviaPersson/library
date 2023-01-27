import React from "react";
import { Route, Routes } from "react-router-dom";
import BookList from "./components/BookList";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import BookDetailPage from "./components/BookDetailPage";
import NewReleases from "./components/navBarComponents/NewReleasesPage";
import ComingSoon from "./components/navBarComponents/ComingSoonPage";
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

  function handleChange() {
    console.log("Search");
  }

  return (
    <React.Fragment>
      <div className="app-container">
        <NavBar />
        <Header handleChange={handleChange} />
        <Routes>
          <Route path="/" element={<BookList books={data.data} />}></Route>
          <Route path="/new-releases" element={<NewReleases />}></Route>
          <Route path="/coming-soon" element={<ComingSoon />}></Route>
          <Route
            path="/book/:id"
            element={<BookDetailPage books={data.data} />}
          ></Route>
          <Route path="/not-found" component={NotFound}></Route>
          {/* <Route path="/" element={<Navigate replace exact to="/books" />} /> */}
        </Routes>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
