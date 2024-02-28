import React from 'react'
import { useNavigate } from 'react-router-dom'
const Card = (props) => {
  const Navigate = useNavigate()
  const click = props.vertical_id
  const handlebutton=(e)=>{
    console.log(click);

         Navigate('/')
  }
  return (
    <div>
    <div className="card" style={{"width": "18rem"}}>
      <img className="card-img-top" src="https://source.unsplash.com/random/60×50/?fruit" alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{props.cardtitle}</h5>
        <p className="card-text">{props.carddesc}</p>
        <div className="container w-100">
         
            <div className="d-inline ml-3 fs-1">
              total price
            </div>
            <div className="d-inline ml-3 fs-1">
              <button
              id={props.vertical_id}
              onClick={(e)=>{
                props.onClick(e)
              }}>courses</button>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Card