import SearchBox from "./common/SearchBox";
import "./Header.css";

function Header({ handleChange }) {
  return (
    <div className="header-container">
      <div className="header-content">
        <p className="header-logo">Bookly</p>
        <SearchBox handleChange={handleChange} />
      </div>
    </div>
  );
}

export default Header;
