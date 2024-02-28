import React, { useEffect, useState } from 'react'
import Navbar from '../../common/Navbar'
import UserCard from './UserCard'


import './usercard.css'

const SearchComponent = () => {

   const [All_user,set_all_user] = useState()

  // const server = 'http://localhost:5000/api'
  const server = 'https://social-media-backend-5od7.onrender.com/api'

  useEffect(()=>{
    async function calldata(){
        const res = await fetch(`${server}/search-page`,
        {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem("token"),
            },
}  )
   const result = await res.json();
  //  setpost(result.all_post)
  //  setuser(result.user)
  //  console.log(result.all_post);
  set_all_user(result.data)
   // console.log(result.all_post);
   // console.log(result.user_post);
    }
calldata()
},[])
console.log({All_user});
  return (
    <>
      serch <input type="serch" />

      <div className="user-card-grid">
      {All_user && All_user.map((user, i) => (
        <div key={i}>
          <UserCard user={user} />
        </div>
      ))}
    </div>
    </>
  )
}

export default SearchComponent