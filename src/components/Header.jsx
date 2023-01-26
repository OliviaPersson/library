import "./Header.css";
import searchIcon from "../images/search-icon.png";

function Header() {
  return (
    <div className="header-container">
      <div className="header-content">
        <p className="header-logo">Bookly</p>
        <img className="search-icon" src={searchIcon} />
      </div>
    </div>
  );
}

export default Header;
