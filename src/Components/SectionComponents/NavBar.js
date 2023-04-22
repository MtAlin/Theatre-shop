import React from "react";
import { Link } from "react-router-dom";
import { BsCart3, BsHeart, BsFillHeartFill } from "react-icons/bs";
import { RiUser3Line } from "react-icons/ri";
import { useSelector } from "react-redux";
function NavBar() {
  const productCart = useSelector((state) => state.counter.cartProduct);
  const productFav = useSelector((state) => state.counter.favArray);
  return (
    <div className="navBar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          CHICAGO
        </Link>
        <div>
          <ul className="icons hide">
            <li className="px-2">
              <Link to="/user">
                <RiUser3Line />
              </Link>
            </li>
            <li className="px-2">
              <Link to="/favorite">
                {productFav.length == 0 ? <BsHeart /> : <BsFillHeartFill />}
              </Link>
            </li>
            <li className="px-2 project_cart">
              <Link to="/cart">
                <BsCart3 />
              </Link>
              <span
                className={productCart.length == 0 ? "hide_cart" : "show_cart"}
              >
                {productCart.length == 0 ? "" : productCart.length}
              </span>
            </li>
          </ul>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/contact" className="nav-link">
                Contact <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/costumes" className="nav-link">
                Costumes <span className="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="icons show">
            <li className="px-2">
              <Link to="/user">
                <RiUser3Line />
              </Link>
            </li>
            <li className="px-2">
              <Link to="/favorite">
                {productFav.length == 0 ? <BsHeart /> : <BsFillHeartFill />}
              </Link>
            </li>
            <li className="px-2 project_cart">
              <Link to="/cart">
                <BsCart3 />
              </Link>
              <span
                className={productCart.length == 0 ? "hide_cart" : "show_cart"}
              >
                {productCart.length == 0 ? "" : productCart.length}
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
