import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaHome, FaPortrait } from "react-icons/fa";
import "./Nav.css";

const Nav = () => {
  return (
    <div>
      <nav className="navbar">
        <div>
          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
            <p>
              <span>
                <FaHome id="icon" />
              </span>
              Home
            </p>
          </Link>
          <Link to="/about" style={{ textDecoration: "none", color: "#fff" }}>
            <p>
              <span>
                <FaPortrait id="icon" />
              </span>
              About
            </p>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
