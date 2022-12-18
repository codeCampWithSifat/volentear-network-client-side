import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };

  return (
    <div className="p-3 mb-2 text-dark bg-dark bg-opacity-25 sticky-top">
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <Link to="/" style={{ textDecoration: "none", color: "darkblue" }}>
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-3 p-1">
                <Link
                  to="/home"
                  style={{ textDecoration: "none", color: "darkblue" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item mx-3  p-1">
                <Link
                  to="/about"
                  style={{ textDecoration: "none", color: "darkblue" }}
                >
                  About
                </Link>
              </li>
              <li className="nav-item mx-3 p-1">
                <Link
                  to="/contact"
                  style={{ textDecoration: "none", color: "darkblue" }}
                >
                  Contact
                </Link>
              </li>
              {!user ? (
                <li className="nav-item mx-3 p-1">
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "darkblue" }}
                  >
                    Login
                  </Link>
                </li>
              ) : (
                <button
                  type="button"
                  onClick={logout}
                  className="btn btn-danger"
                >
                  Logout
                </button>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
