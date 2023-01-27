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
            <li>Home</li>
          </NavLink>
          <NavLink className="nav-item" to="/new-releases">
            <li>New Releases</li>
          </NavLink>
          <NavLink className="nav-item" to="/coming-soon">
            <li>Coming Soon</li>
          </NavLink>
          <NavLink className="nav-item" to="/books">
            <li>Books</li>
          </NavLink>
          <NavLink className="nav-item" to="/best-sellers">
            <li>Best Sellers</li>
          </NavLink>
          <NavLink className="nav-item" to="/my-wishlist">
            <li>My Wishlist</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
