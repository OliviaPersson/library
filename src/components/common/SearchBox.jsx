import searchIcon from "../../images/search-icon.png";
import "./SearchBox.css";

function SearchBox({ handleChange, searchInput }) {
  return (
    <div className="search">
      <input
        type="search"
        placeholder="Search..."
        onChange={handleChange}
        value={searchInput}
      />
      <img className="search-icon" src={searchIcon} />
    </div>
  );
}

export default SearchBox;
