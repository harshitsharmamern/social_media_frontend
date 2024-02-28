import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

const UserContextP = ({children}) => {

  const [user,setuser] = useState({})
  
  
  
  const [Allpost,setpost] = useState([])
  const [likecount,setlikecount] = useState([]);
  const [All_post_data,set_all_post]= useState([])

    let b = localStorage.getItem("token")
    const [logIn, setLogIn] = useState(b);
    
    const handle_click_unlike= async(data)=>{
      // const server = 'http://localhost:5000/api'
      const server = 'https://social-media-backend-5od7.onrender.com/api'

      const post_id = data._id;
      const res = await fetch(`${server}/post-unlike`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({
          unlike : post_id
      })
  
      })
      const result = await res.json();
      if(result.success){
        const newdata = Allpost.map((item,index)=>{
          if(item._id==result.data._id){
            return result;
          }else{
            return item;
          }
        })
        setpost(newdata)
        // setpost(result.data)
        // set_all_post(result.data)
      }
      window.location.reload(false);
   }
  const handle_click = async(data)=>{
    
    // const server = 'http://localhost:5000/api'
    const server = 'https://social-media-backend-5od7.onrender.com/api'

    const post_id = data._id;
    const res = await fetch(`${server}/post-like`,
    {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({
          like : post_id
      })
    }  )
  
       const result = await res.json();
       if(result.success){
        const newdata = Allpost.map((item,index)=>{
          if(item._id==result.data._id){
            return result;
          }else{
            return item;
          }
        })
        setpost(newdata)
        //  setpost(result.data)
        // set_all_post(result.data)
        // setlikecount( result.data.like)
        // console.log( result.data )
       }
       window.location.reload();
  
      //  console.log(result);
  }


  ///////////////////////////////////

 
// const user={};
// const history = useHistory();
const navigate = useNavigate();


  // const server = 'http://localhost:5000/api'
  // useEffect(()=>{
  //                    async function calldata(){
  //                        const res = await fetch(`${server}/home`,
  //                        {
  //                            method: "GET",
  //                            headers: {
  //                              "Content-Type": "application/json",
  //                              "auth-token": localStorage.getItem("token"),
  //                            },
  //                }  )
  //                   const result = await res.json();
  //                   if(!result.status){
                     
  //                   }else{
  //                     setpost(result.all_post)
  //                     setuser(result.user)
  //                     console.log({post : result.all_post});
  //                   }
                    
  //                    }
  //     calldata()
  // },[])

    const givendata={
      Allpost,setpost,likecount,All_post_data,
              user,setuser,logIn, setLogIn,handle_click_unlike,handle_click
    }

    console.log({logIn , msg:"from App context pr"});
    console.log( likecount )
    return (
      <UserContext.Provider value={givendata}>
        {children}
      </UserContext.Provider>
    );
}

export default UserContextP