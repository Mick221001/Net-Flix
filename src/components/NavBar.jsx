import "./Navbar.css";
import logo from "./img/logo.png";
import React from "react";

function NavBar() {
  return (
    <div className="Navbar">
        <a href="#Home">
            <img src="{logo}" alt="logo" />
        </a>
        <ul>
            <li><a href="#">Film</a></li>
            <li><a href="#">Serie TV</a></li>
            <li><a href="#">Recenti</a></li>
        </ul>
    </div>
  );
}

export default NavBar;

