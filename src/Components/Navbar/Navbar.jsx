import React, { useContext, useState } from "react";
import "./Navbar.css";

import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import nav_dropdown from "../Assets/nav_dropdown.png";

import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [menuOpen, setMenuOpen] = useState(false);

  const { getTotalCartItems } = useContext(ShopContext);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">

      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>

      <img
        className="nav-dropdown"
        onClick={toggleMenu}
        src={nav_dropdown}
        alt=""
      />

      <ul className={menuOpen ? "nav-menu nav-menu-visible" : "nav-menu"}>
        <li onClick={() => setMenu("shop")}>
          <Link to="/">Shop</Link>
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link to="/mens">Men</Link>
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link to="/womens">Women</Link>
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="/kids">Kids</Link>
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>

        <div className="nav-cart-count">
          {getTotalCartItems()}
        </div>
      </div>
    </div>
  );
};

export default Navbar;