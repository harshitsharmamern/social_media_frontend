import React, { useState,useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/navbar.css'
import { UserContext } from '../UserContextProvider.jsx/UserContextP'
const Navbar = () => {

const {logIn,setLogIn} = useContext(UserContext)

  const Navigate = useNavigate();
  const [token,settoken] = useState(false)
  const handlelogout=()=>{
    // settoken(false)
    setLogIn(false)
    localStorage.removeItem('token');
    Navigate('/')
    // window.location.reload();
  }
//   useEffect(() => {
//     let t = localStorage.getItem("token");
//     if (t) {
//         // setcomponent1(3);
//         settoken(true)
//         Navigate('/home')
//       } 
//       console.log({t});
// }, []); 
// console.log(token);
  return (
    <>
       <nav className="navbar">
      <ul className="nav-list">
        {logIn ? (<>
          <li className="nav-item"><a href="/home">Home</a></li>
        <li className="nav-item"><a href="/search">Search</a></li>
        <li className="nav-item"><a href="/profile">Profile</a></li>
        <li className="nav-item" onClick={handlelogout}> <a href="">Logout </a>  </li>
       
        </>) : (<>
           welcome to social media application
        </>)}
       
      </ul>
    </nav>
    </>
  )
}

export default Navbar