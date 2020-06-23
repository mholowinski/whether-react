import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav id="navbar">
      <span id="menu-title">Whether</span>
      <div id="menu-item">
        <span className="menu-item">
          <Link to="/">Home</Link>
        </span>
        <span className="menu-item">
          <Link to="/about">About</Link>
        </span>
        <span className="menu-item">
          <Link to="/result">Wyniczek</Link>
        </span>
      </div>
    </nav>
  );
}
