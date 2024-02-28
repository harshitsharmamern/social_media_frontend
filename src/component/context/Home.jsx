// import React from 'react'
import React, { useEffect, useState, useRef } from "react";
import Navbar from "../Nav/Navbar";
import { useNavigate } from 'react-router-dom';

import Card from "./Card";
import Carousal from "./Screen/Carousal";
import Footer from "./Screen/Footer";
const Home = () => {
    const [data_val, set_data_val] = useState();
    const [user,setuser] = useState({});
    const Navigate = useNavigate()
    useEffect(() => {
    async function add_data(){
        try {
          // const server = 'https://newlearner2-backend-deploy.onrender.com'
            // const server ='http://localhost:5000';

            const server ='http://localhost:5000/api/user/home_data';
            const response = await fetch(
              server,
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  "auth-token": localStorage.getItem("token"),
                },
              }
            );
    
            const result = await response.json();
          //  set_data_val(result)
          console.log(result);
          if(!result.success){
            console.log('login kro');
            // Navigate("/")
          }else if(result.success){

            //  setuser(result.user_data)
             console.log(result);

          }
           
    
          }
          catch(e){
            console.log("askh");
          }
        }
    add_data()  
    
    }, [])

 
  return (<>
  
<Navbar/> 

hello this i
<div>

 </div>
   </>)
}

export default Home