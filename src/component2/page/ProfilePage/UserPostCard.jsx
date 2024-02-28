import React from 'react'

const UserPostCard = ({user_p}) => {
  return (
    <>
        <div className="user-card">
      <div className="user-card-header">UserCard</div>
      <div className="user-card-info">title: {user_p.title}</div>
      <div className="user-card-info">description: {user_p.description}</div>
      <div className="user-card-actions">
      <button className="follow-button">edit</button>
      
        <button className="follow-button">delete</button>
      </div>
    </div>
    </>
  )
}

export default UserPostCard