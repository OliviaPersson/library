import React from "react";
import MainContent from "./components/MainContent";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  function handleChange() {
    console.log("Search");
  }

  return (
    <div className="app-container">
      <NavBar />
      <Header handleChange={handleChange} />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
