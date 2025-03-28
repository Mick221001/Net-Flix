import { useState, useEffect } from "react";
import { AiOutlineSearch, AiOutlineUser , AiOutlineAppstore } from "react-icons/ai"; // Importa le icone da react-icons/ai
import { Link } from "react-router-dom"; // Importa Link da react-router-dom
import "./NavBar.css";

const NavBar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolling ? "scrolling" : ""}`}>
      {/* Logo */}
      <Link to="/" className="logo">N</Link>

      {/* Links */}
      <div className="nav-links">
        <Link to="/film">Film</Link>
        <Link to="/serie-tv">Serie TV</Link>
        <Link to="/recenti">Recenti</Link>
      </div>

      {/* Buttons */}
      <div className="nav-buttons">
        <button><AiOutlineSearch size={20} /></button>
        <button><AiOutlineAppstore size={20} /></button>
        <button><AiOutlineUser  size={20} /></button>
      </div>
    </nav>
  );
};

export default NavBar;