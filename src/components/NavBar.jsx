import { useState, useEffect } from "react";
import { FaSearch, FaUser, Circle, FaThLarge } from "react-icons/fa";
import "./NavBar.css";

const NavBar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolling ? "scrolling" : ""}`}>
      {/* Logo */}
      <a href="/" className="logo">N</a>

      {/* Links */}
      <div className="nav-links">
        <a href="#film">Film</a>
        <a href="#serie-tv">Serie TV</a>
        <a href="#recenti">Recenti</a>
      </div>

      {/* Buttons */}
      <div className="nav-buttons">
        <button><FaSearch size={20} /></button>
        <button><FaThLarge size={20} /></button>
        <button><FaUser Circle size={20} /></button>
      </div>
    </nav>
  );
};

export default NavBar;