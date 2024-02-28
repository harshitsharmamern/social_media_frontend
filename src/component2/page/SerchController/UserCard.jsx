import React from 'react'
import './usercard.css'
const UserCard = ({user}) => {
  return (
    <>
       <div className="user-card">
      <div className="user-card-header">UserCard</div>
      <div className="user-card-info">User Name: {user.Name}</div>
      <div className="user-card-info">Followers: {user.followers.length}</div>
      <div className="user-card-actions">
        <button className="follow-button">Follow</button>
      </div>
    </div>
    </>
  )
}

export default UserCard