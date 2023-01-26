import MainContent from "./components/MainContent";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
