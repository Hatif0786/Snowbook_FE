import React , {useEffect} from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  let location = useLocation()
  useEffect(() => {
  }, [location])
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <Link className={`navbar-brand ${location.pathname==="/" ? "active":  ""}`} to="/">
          <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
          <b>  Snowbook</b>
        </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/" ? "active":  ""}`} aria-current="page" to="/">
                  <b>Home</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/about" ? "active":  ""}`} to="/about">
                  <b>About</b>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
