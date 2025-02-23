import React from "react";
import { Link } from "react-router-dom";
import "./Navbars.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Website Name (Left Side) */}
        <Link className="navbar-brand fw-bold text-white" to="/">The Hungery Spoon</Link>

        {/* Navbar Toggler for Mobile View */}
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

        {/* Navbar Links (Right Side) */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/feed">Feed</Link>
            </li>

            {/* Account Dropdown */}
            <li className="nav-item dropdown">
              <Link 
                className="nav-link dropdown-toggle text-white" 
                to="#" 
                id="accountDropdown" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Account
              </Link>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="accountDropdown">
                <li><Link className="dropdown-item" to="/account">Profile</Link></li>
                <li><Link className="dropdown-item" to="/my-recipes">My Recipes</Link></li>
                <li><Link className="dropdown-item" to="/favorites">Saved Recipes</Link></li>
                <li><Link className="dropdown-item" to="/settings">Settings</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item text-danger" to="/logout">Logout</Link></li>
              </ul>
            </li>
          </ul>

          {/* Login & Register Links */}
          <div className="ms-3">
            <Link className="btn btn-light me-2" to="/login">Login</Link>
            <Link className="btn btn-warning" to="/register">Register</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
