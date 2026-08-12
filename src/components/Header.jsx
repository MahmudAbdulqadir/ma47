import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";
const ma47 = "../my logo-new.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navy">
      <nav className="navbar">
        <Link to="/">
          <img className="logo-img" src={ma47} alt=" ma47  log web dev" />
        </Link>

        <ul className={`nav-links ${isOpen ? "show" : ""}`}>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/achievements" onClick={() => setIsOpen(false)}>
              Achieve
            </Link>
          </li>
          <li>
            <Link to="/skills" onClick={() => setIsOpen(false)}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>

        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
