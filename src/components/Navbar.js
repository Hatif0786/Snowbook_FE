import React, { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../components/css/Navbar.css";
import userContext from "../context/User/userContext";

const Navbar = () => {
  let location = useLocation();
  const history = useNavigate()
  const {logged, setLogged} = useContext(userContext)
    

  useEffect(() => {}, [location]);

  const handleRegisterClick = () => {
    history("/signup");
  };

  const handleLoginClick = () => {
    history("/login");
  };

  const handleLogoutClick = () => {
    localStorage.removeItem("token");
    setLogged(false)
    history("/login", {replace:true})
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link
            className={`navbar-brand ${
              location.pathname === "/" ? "active" : ""
            }`}
            to="/"
            style={{ marginTop: "7px" }}
          >
            <img
              src={require("../snow.gif")}
              alt="Logo"
              width="30"
              height="30"
              className="d-inline-block align-text-top"
              style={{ marginRight: "5px", marginBottom: "10px", paddingBottom:"5px", paddingLeft:"5px" }}
            />
            <b style={{ lineHeight: "35px", verticalAlign: "middle" }}>
              Snowbook
            </b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav" style={{ marginTop: "4px" }}>
              {logged && (
                <>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        location.pathname === "/" ? "active" : ""
                      }`}
                      aria-current="page"
                      to="/"
                    >
                      <b style={{ marginLeft: "15px" }}>Home</b>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        location.pathname === "/about" ? "active" : ""
                      }`}
                      to="/about"
                    >
                      <b style={{ marginLeft: "15px" }}>About</b>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          {!logged && location.pathname !== "/signup" && (
            <button
              onClick={handleRegisterClick}
              style={{ marginRight: "7px", backgroundColor: "#d17842" }}
            >
              <span>Register</span>
              <svg
                width="30"
                height="30"
                viewBox="0 0 72 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="37"
                  cy="37"
                  r="35.5"
                  stroke="black"
                  strokeWidth="3"
                ></circle>
                <path
                  d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                  fill="black"
                ></path>
              </svg>
            </button>
          )}

          {!logged && location.pathname !== "/login" && (
            <button
              onClick={handleLoginClick}
              style={{ backgroundColor: "#3ba8d4" }}
            >
              <span>Login</span>
              <svg
                width="30"
                height="30"
                viewBox="0 0 72 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="37"
                  cy="37"
                  r="35.5"
                  stroke="black"
                  strokeWidth="3"
                ></circle>
                <path
                  d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                  fill="black"
                ></path>
              </svg>
            </button>
          )}


          {logged && (
            <button
              onClick={handleLogoutClick}
              className="btn btn-warning"
            >
              <span>Logout</span>
              <svg
                width="30"
                height="30"
                viewBox="0 0 72 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="37"
                  cy="37"
                  r="35.5"
                  stroke="black"
                  strokeWidth="3"
                ></circle>
                <path
                  d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                  fill="black"
                ></path>
              </svg>
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;