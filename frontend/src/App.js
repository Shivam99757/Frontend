import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Feed from "./pages/Feed"; 
import Home from "./pages/Home"; 
import Account from "./pages/Account";  // Import the Account Page

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem("username");
    setIsLoggedIn(!!user);
  }, []);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/feed" element={<Feed />} />

        {/* Protected Account Route - Redirect to Login if not logged in */}
        <Route 
          path="/account" 
          element={isLoggedIn ? <Account setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/login" />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
