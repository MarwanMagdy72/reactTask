import React from "react";
import './NavBar.css'
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg  navbar-light  py-4 text-white ">
        <div className="container">
          <Link className="navbar-brand text-white" to={'/'}>
            START FRAMEWORK
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item ">
                <NavLink className="nav-link  text-white mx-3" to={'/'}>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link  text-white mx-3" to={'/portfolio'}>
                  Portfolio
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link text-white mx-3" to={'contact'}>
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
