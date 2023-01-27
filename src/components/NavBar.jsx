import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar-container">
      <p className="user">Olivia Persson</p>
      <hr className="navbar-line" />
      <nav className="nav-list">
        <ul>
          <li>
            <p className="nav-item">New Realeases</p>
          </li>
          <li>
            <p className="nav-item">Coming Soon</p>
          </li>
          <li>
            <p className="nav-item">Books</p>
          </li>
          <li>
            <p className="nav-item">Best Sellers</p>
          </li>
          <li>
            <p className="nav-item">My Wishlist</p>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
