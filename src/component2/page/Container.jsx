import React, { useContext, useEffect } from 'react'
import '../css/container.css'
import { UserContext } from '../UserContextProvider.jsx/UserContextP'
const Container = (props) => {

  const {handle_click_unlike,handle_click,likecount,setpost,user,Allpost} = useContext(UserContext)
  // useEffect
  // useEffect(()=>{
  //   setpost(Allpost)
  // })
  // useContext
// Allpost
//  const handle_click_unlike= async(data)=>{
//     const server = 'http://localhost:5000/api'
//     const post_id = data._id;
//     const res = await fetch(`${server}/post-unlike`,
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "auth-token": localStorage.getItem("token"),
//       },
//       body: JSON.stringify({
//         unlike : post_id
//     })

//     })
//     const result = await res.json();

//     window.location.reload(false);
//  }
// const handle_click = async(data)=>{
 
//   const server = 'http://localhost:5000/api'
//   const post_id = data._id;
//   const res = await fetch(`${server}/post-like`,
//   {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "auth-token": localStorage.getItem("token"),
//       },
//       body: JSON.stringify({
//         like : post_id
//     })
//   }  )

//      const result = await res.json();
//      window.location.reload();

//     //  console.log(result);
// }
  // console.log({Allpost});
  console.log(Allpost[props.index].like_id);
  return (<>
  <div className="container">
    <div className="container-element">
      
    
      <div className='name-block'>
        {props.data.postedby.Name}
      </div>
      <div className='containt'>
        <div className='title'>
          {props.data.title} 
        </div>
        <div className='description'>
          {props.data.description}
        </div>
        <div className='like-button'>
          {
          //  props.data.like_id.includes(props.user._id)
           Allpost[props.index].like_id.includes(props.user._id)
           ? 
           <button  style={{backgroundColor:"red"}} onClick={()=>handle_click_unlike(props.data)}> unlike</button>
           :
           <button   onClick={()=>handle_click(props.data)}> like</button>
          }
          {/* {props.Allpost[props.index]} */}
          {props.data.like.length}
          {/* {likecount.length} */}
        </div>
        <div className='like-by'>
             {props.data.like.map((d)=>{
              return(<>
              <div>
                {d.email}
              </div>
              </>)
             })}
        </div>
      </div>

      </div>
      </div>
  </>
  )
}

export default Container