import "./styles.css";

function Navbar() {
  return (
    <div className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="fa-solid fa-house"></i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="fa-solid fa-magnifying-glass"></i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="fa-solid fa-bag-shopping"></i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="fa-solid fa-gear"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
