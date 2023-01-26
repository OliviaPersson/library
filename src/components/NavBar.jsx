import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar-container">
      <p className="user">Olivia Persson</p>
      <hr />
      <div className="nav-list">
        <p className="nav-item">New Realeases</p>
        <p className="nav-item">Best Sellers</p>
        <p className="nav-item">My Wishlist</p>
      </div>
    </div>
  );
}

export default NavBar;
