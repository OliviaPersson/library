import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import BookList from "./components/BookList";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import BookDetailPage from "./components/BookDetailPage";
import "./App.css";

function App() {
  function handleChange() {
    console.log("Search");
  }

  return (
    <React.Fragment>
      <div className="app-container">
        <NavBar />
        <Header handleChange={handleChange} />
        <Routes>
          <Route path="/movies" element={<BookList />}></Route>
          <Route path="/:id" element={<BookDetailPage />}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Route path="/" element={<Navigate replace to="/movies" />} />
        </Routes>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
