import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../common/Navbar'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import '../css/signup.css'
import { UserContext } from '../UserContextProvider.jsx/UserContextP';
const Signup = () => {

  // const {login,setLogIn} = useContext(UserContext)
  const {logIn,setLogIn} = useContext(UserContext)

  const Navigate = useNavigate();
  const [signup, setsignup] = useState(true)


  const [component1,setcomponent1] = useState(1)
  const [cred, setcred] = useState({
    Name: "",
    email: "",
    password: ""
  })

  async function hadlesubmit(e) {

    e.preventDefault();

    if(cred.password.length<5 || cred.Name<5 || cred.email.length<5){
       toast.warn("Signup failed : email already exist");

    }
    // You can handle the form submission logic here, e.g., sending data to the server
    console.log("Submitted credentials:", cred);
    try {
      // const server = 'http://localhost:5000/api'
      const server = 'https://social-media-backend-5od7.onrender.com/api'
      const resp = await fetch(
        `${server}/user-signup`
        , {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            //   "auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify({
            Name: cred.Name,
            email: cred.email,
            password: cred.password
          })
        });

      const result = await resp.json()
      console.log({result});
      if (result.success) {
        localStorage.setItem("token", result.token)
        setLogIn(true)

        console.log({token : result.token});
        Navigate('/home')
        // setcomponent1(2)
        console.log("login sucess");
      }else if(!result.success && result.message ==="user already"){
        toast.warn("Signup failed : email already ");
      }
       else {
        toast.warn("Signup failed : email already exist");

        console.log("error");
      }
    } catch (err) {
      toast.warn("all fields required ");
      console.log({ err });
    }
  }

  const hadle_signin_submit = async (e) => {

    e.preventDefault();
    // You can handle the form submission logic here, e.g., sending data to the server
    console.log("Submitted credentials:", cred);
    try {
      // const server = 'http://localhost:5000/api'
      const server = 'https://social-media-backend-5od7.onrender.com/api'
      // https://social-media-backend-5od7.onrender.com



      const resp = await fetch(
        `${server}/user-signin`
        , {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            //   "auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify({
            email: cred.email,
            password: cred.password
          })
        });

      const result = await resp.json()
      console.log({result});
      if (result.success) {
        
        localStorage.setItem("token", result.token)
        setLogIn(true)
        console.log({token : result.token});

        Navigate('/home')
        console.log(result.all_post);
      } else if(!result.status && result.msg==="wrong cred"){
        toast.warn("email not register");
      }
      else if(!result.success && result.error==="wrong pass"){
        toast.warn("wrong password ");
      } 
      else {
        toast.warn("Signin failed ");

        console.log("error");
      }
    } catch (err) {
      console.log({ err });
    }
  }

  function onchange_F(e) {
    setcred({
      ...cred,
      [e.target.name]: e.target.value
    })
  }
  const handle_change_page = () => {
    console.log("button click");
  }

  // let t = localStorage.getItem("token")
  
  useEffect(() => {
    let t = localStorage.getItem("token");
    if (t) {
        // setcomponent1(3);
        Navigate('/home')
      } 
      console.log({t});
}, []); 
  return (
    <>
      {component1==1 ? (
        <>
          <div className="container">
            <div className="heading">signup</div>

            <input type="text" placeholder="Name" name='Name'
            value={cred.Name}
            onChange={onchange_F} />
            <input type="text" placeholder="email" name='email' 
            value={cred.email}
            onChange={onchange_F} />

            <input type="text" placeholder="password" name='password'
            value={cred.password}
            onChange={onchange_F} />

            <button type='submit' onClick={hadlesubmit}>submit</button>
            {console.log({ signup })}
            <button onClick={() => {
              // setsignup(!signup)
              // console.log("button click");
              setcomponent1(2)
            }}>signin</button>

          </div>
          <ToastContainer />

        </>) 
        : 
        
        (

          <>

            <div className="container">
              <div className="heading">signin</div>

              <input type="text" placeholder="email" name='email'
              value={cred.email}
              onChange={onchange_F} />

              <input type="text" placeholder="password" name='password'
              value={cred.password}
              onChange={onchange_F} />

              <button type='submit' onClick={hadle_signin_submit}>submit</button>
              {console.log({ signup })}
              <button onClick={() => {
                // setsignup(!signup)
                // console.log("button click");
                setcomponent1(1)
              }}>create account</button>


<ToastContainer />

            </div>



          </>
        )
      }
    </>
  )
}





export default Signup