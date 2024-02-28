import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Nav/Navbar';
import Card from '../Card';
const Inside = () => {

  const [vertical,setvertivcal] = useState([])
  const [useris,setuseris] = useState({fName:""})
  // const server = 'https://newlearner2-backend-deploy.onrender.com/api'

    // const server ='http://localhost:5000/api';
    const server ='https://jsonplaceholder.typicode.com/comments?postId=1'
    const Navigate = useNavigate();

    useEffect(()=>{
        async function get(){
            const response = await fetch(
                `${server}`,
                {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token"),
                  },
                }
              );
              
              const res = await response.json()
              console.log("hello");
              setvertivcal(res)
              // console.log(res);
        }
        get()  
    },[])
  // function handlecourse(e){
  //    const verticalid = e.target.id; 
  //    Navigate(`/inside/vertical/${verticalid}/course`)
  // }
  // const server ='http://localhost:5000/api';

  async function logout_fun(){
    try{
      const response = await fetch(
        `${server}/user/logout`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("auth-token"),
          },
        }
      );
     
        // setcred(result)
        console.log(response);
    const result = await response.json();
        if(result.success){
            console.log("singnin success");
            console.log(result.time_enter);
            // const token = localStorage.getItem('auth-token');

          // Remove token from localStorage
          // localStorage.removeItem('token');
          Navigate("/signin")
          
          // localStorage.setItem("auth-token",result.auth_token)
          // console.log(result.auth_token);
            //   console.log(result.data);
        }else{
            console.log("error");
        }
  }catch{
      console.log("errsacs");
      // console.log(JSON.stringify({
      //     fName:cred.fName,
      //     email:cred.email,
      //     password:cred.password
      // }));
  }
  }
  return (
    <>
    asa
     <Navbar/> 
    
    {
      
       vertical.map((val)=>{
        return(<>
        
           <div>
           {val.postId} {val.name}
            </div>
        </>
         )  })
    }

    </>
  )
}

export default Inside