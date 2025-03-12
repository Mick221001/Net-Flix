import { useState, useEffect } from "react";
import { AiOutlineSearch, AiOutlineUser , AiOutlineAppstore } from "react-icons/ai"; // Importa le icone da react-icons/ai
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
      <a href="/" className="logo">N</a>

      {/* Links */}
      <div className="nav-links">
        <a href="#film">Film</a>
        <a href="#serie-tv">Serie TV</a>
        <a href="#recenti">Recenti</a>
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