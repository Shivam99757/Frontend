import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Accounts.css";

const Account = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="container mt-5">
      <h2>My Account</h2>
      <p>Welcome to your account page! Here you can manage your profile, view saved recipes, and more.</p>
      <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Account;
