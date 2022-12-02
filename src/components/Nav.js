import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaHome, FaPortrait } from "react-icons/fa";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Nav = () => {
  // const [isDarkMode, setDarkMode] = React.useState(false);

  // const toggleDarkMode = (checked: boolean) => {
  //   setDarkMode(checked);
  // };

  return (
    <div>
      <nav className="navbar">
        <div>
          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
            <p>
              <span id="icon">
                <FaHome />
              </span>
              Home
            </p>
          </Link>
          <Link to="/about" style={{ textDecoration: "none", color: "#fff" }}>
            <p>
              <span id="icon">
                <FaPortrait />
              </span>
              About
            </p>
          </Link>
          {/* <DarkModeSwitch
            style={{ marginBottom: "2rem" }}
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={120}
          /> */}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
