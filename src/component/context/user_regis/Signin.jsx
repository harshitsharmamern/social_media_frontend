import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Nav/Navbar';
const Signin = () => {

  const Navigate = useNavigate();

  const [cred, setcred] = useState({

    email: "",
    password: ""
  })
  // localhost:5000/api/user/signup
  // const server = 'https://newlearner2-backend-deploy.onrender.com/api'

  const server = 'http://localhost:5000/api';
 
let t = localStorage.getItem("token")
console.log("token->",t);  
const onsubmit_f = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(
        `${server}/user/signin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            //   "auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify({

            email: cred.email,
            password: cred.password
          })
        }
      );

      // setcred(result)
      console.log(response);
      const result = await response.json();
      if (result.success) {
        console.log("singnin success");
        console.log(result.time_enter);
        Navigate("/home")

        localStorage.setItem("auth-token", result.auth_token)
        console.log(result.auth_token);
        //   console.log(result.data);
      } else {
        console.log("error");
      }
    } catch {
      console.log("err");
      // console.log(JSON.stringify({
      //     fName:cred.fName,
      //     email:cred.email,
      //     password:cred.password
      // }));
    }
  }

  const onchange_F = (e) => {
    setcred({
      ...cred,
      [e.target.name]: e.target.value
    })
    // console.log(cred.fName);
  }
  return (
    <>
      <Navbar />
      <div className='container '>


        <form onSubmit={onsubmit_f}>


          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email"
              name='email'
              onChange={onchange_F}
              class="form-control" id="email"
              value={cred.email}
              placeholder="Enter email" />
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password"
              onChange={onchange_F}
              class="form-control"
              name="password"
              value={cred.password}
              placeholder="Password" />
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>

      </div>
    </>
  )
}

export default Signin