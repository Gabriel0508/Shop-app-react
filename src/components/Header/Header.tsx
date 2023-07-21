import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [colorChange, setColorChange] = useState(false);

  const changeNavColor = () => {
    if (window.scrollY >= 80) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };
  window.addEventListener("scroll", changeNavColor);

  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => {
    setCollapsed(false);
  };

  const searchItem = () => {};

  return (
    <div>
      <nav
        className={
          colorChange
            ? "colorChange navbar-expand-lg position-fixed bg-danger w-100"
            : "navbar navbar-expand-lg position-fixed navbar-light w-100"
        }
      >
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="/">
            eShop
          </a>

          <button
            className="navbar-toggler text-light"
            type="button"
            onClick={toggleNavbar}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>

          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav w-75 justify-content-between align-items-center">
              <li className="nav-item">
                <Link className="nav-link text-light active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item search-item">
                <form>
                  <input
                    className="search px-3 rounded-pill"
                    type="text"
                    placeholder="Search"
                  />
                  <FontAwesomeIcon
                    className="search-icon"
                    icon={faSearch}
                    onClick={searchItem}
                  />
                </form>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/">
                  Account
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/">
                  <FaShoppingCart />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
