import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [toggleState, setToggleState] = React.useState(false);

  const toggle = () => {
    setToggleState(toggleState === false ? true : false);
  };

  return (
    <div className="navbar-container">
      <p className="user">Olivia Persson</p>
      <hr className="navbar-line" />
      <nav className="nav-list">
        <i className="fa fa-bars" aria-hidden="true" onClick={toggle} />
        <ul>
          <NavLink className="nav-item" to="/">
            <li>My Bookshelf</li>
          </NavLink>
          <NavLink className="nav-item" to="/currently-reading">
            <li>Currently Reading</li>
          </NavLink>
          <NavLink className="nav-item" to="/read">
            <li>Read</li>
          </NavLink>
          <NavLink className="nav-item" to="/favourites">
            <li>Favourites</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
