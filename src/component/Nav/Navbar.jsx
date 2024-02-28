import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../context/css/Navbar.css'; // Import the CSS file




const Navbar = () => {
  const Navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    console.log("auth remove");
    localStorage.removeItem("auth-token");
    Navigate('/signin');
  };
  // let f = localStorage.getItem("token")
  let s = localStorage.getItem("auth-token")
// console.log("f->",f,"   s->",s);
// let t = localStorage.getItem("token")
// console.log(t===null);
  return (
    <nav className="navbar">
      <div className="navbar-container" style={{display: 'flex' ,  justifyContent: 'space-between', alignItems: 'center'}}>
        <Link to="/" className="navbar-logo">
          Navbar
        </Link>

        
         <div style={{display: 'flex' }}>
          <ul className="navbar-items " >
            <li className="navbar-item">
              <Link to="/home" className="navbar-link" onClick={handleToggle}>
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/about" className="navbar-link" onClick={handleToggle}>
                About
              </Link>
            </li>

            {localStorage.getItem("auth-token")==null ? (
              <>
                <li className="navbar-item">
                  <Link to="/signup" className="navbar-link" onClick={handleToggle}>
                    Signup
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/signin" className="navbar-link" onClick={handleToggle}>
                    Signin
                  </Link>
                </li>
              </>
            ) : (
              <li className="navbar-item">
                <button className="navbar-link" onClick={handleLogout}>
                  Logout sa
                </button>
              </li>
            )}
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
