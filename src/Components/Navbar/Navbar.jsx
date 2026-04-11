import React, { useContext, useState, useRef, useEffect } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link, useLocation } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [menuOpen, setMenuOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef(null);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar" ref={menuRef}>

      <div className="nav-logo">
        <img src={logo} alt="Shopper Logo" />
        <p>SHOPPER</p>
      </div>

      {/* Hamburger button — only visible on mobile */}
      <button
        className={`nav-dropdown ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-menu ${menuOpen ? "nav-menu-visible" : ""}`}>
        <li onClick={() => { setMenu("shop"); setMenuOpen(false); }}>
          <Link to="/" className={menu === "shop" ? "active" : ""}>Shop</Link>
        </li>
        <li onClick={() => { setMenu("mens"); setMenuOpen(false); }}>
          <Link to="/mens" className={menu === "mens" ? "active" : ""}>Men</Link>
        </li>
        <li onClick={() => { setMenu("womens"); setMenuOpen(false); }}>
          <Link to="/womens" className={menu === "womens" ? "active" : ""}>Women</Link>
        </li>
        <li onClick={() => { setMenu("kids"); setMenuOpen(false); }}>
          <Link to="/kids" className={menu === "kids" ? "active" : ""}>Kids</Link>
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart" className="nav-cart-icon">
          <img src={cart_icon} alt="Cart" />
          {getTotalCartItems() > 0 && (
            <div className="nav-cart-count">{getTotalCartItems()}</div>
          )}
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;