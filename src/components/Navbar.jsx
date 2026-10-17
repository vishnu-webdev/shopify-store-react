import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbarContainer">
      <div className="navbarLogo">
        <h1>Shopify Store</h1>
      </div>

      <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <div className={`nav-menu ${isOpen ? "active" : ""}`}>
        <div className="navbarLinkDiv">
          <ul>
            <li><a href="#home" onClick={() => setIsOpen(false)}>HOME</a></li>
            <li><a href="#products" onClick={() => setIsOpen(false)}>PRODUCTS</a></li>
            <li><a href="#cart" onClick={() => setIsOpen(false)}>CART</a></li>
          </ul>
        </div>

        <div className="navbarAccountSection">
          <button><a href="#login">Login</a></button>
          <button><a href="#signup">Sign up</a></button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;