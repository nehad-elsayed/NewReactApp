import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav id="navbar-example" className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <NavLink className="navbar-brand brand" to={"/"}>
            START REACT
          </NavLink>
          <button
            className="navbar-toggler text-white mybars"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span> Menu</span> <i className="fa-solid fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  my-menu ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link " to={"Portfolio"}>
                  Portfolio
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to={"About"}>
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to={"Contact"}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
