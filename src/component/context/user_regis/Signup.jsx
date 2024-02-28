import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Nav/Navbar';
import '../css/signup.css'; // Import the CSS file

const Signup = () => {
const Navigate = useNavigate();
const [cred,setcred] = useState({
    fName:"",
    email:"",
    password:""
})
// localhost:5000/api/user/signup
// const server = 'https://newlearner2-backend-deploy.onrender.com/api'
const server ='http://localhost:5000/api';
const onsubmit_f=async(e)=>{
    e.preventDefault()
      console.log("pressed");
        try{
            const response = await fetch(
                `${server}/user/signup`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  //   "auth-token": localStorage.getItem("token"),
                  },
                  body: JSON.stringify({
                      fName:cred.fName,
                      email:cred.email,
                      password:cred.password
                  })
                }
              );
            // console.log("hooua");
              // setcred(result)
              console.log(response);
          const result = await response.json();
          console.log("resultasdfasd", result);
              if(result.success){
                  console.log("singnup success");
                  // console.log(result.data);
                  Navigate("/signin")
              }else{
                  console.log("error");
              }


        }catch{
            console.log("err");
            // console.log(JSON.stringify({
            //     fName:cred.fName,
            //     email:cred.email,
            //     password:cred.password
            // }));
        }

}

    const onchange_F=(e)=>{
          setcred({...cred,
        [e.target.name]:e.target.value
        })
        // console.log(cred.fName);
    }
  return (
   <>

    <Navbar />

    <div className="container">
      <div className="form-container">
        <form onSubmit={onsubmit_f}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="fName"
              value={cred.fName}
              placeholder="Enter Name"
              onChange={onchange_F}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={cred.email}
              placeholder="Enter email"
              onChange={onchange_F}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={cred.password}
              placeholder="Password"
              onChange={onchange_F}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  </>
);
};

export default Signup;