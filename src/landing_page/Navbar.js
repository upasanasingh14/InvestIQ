import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg border-bottom" style={{backgroundColor:"#FFF"}}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="media/images/logo2.jpeg" alt="Logo" style={{width:"50%"}} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <form className="d-flex" role="search">
            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link active" to="/product">
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/support">
                  Support
                </Link>
              </li>
            </ul>

            </form>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
