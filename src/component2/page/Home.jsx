import React, { useContext, useEffect, useState } from 'react'
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



import Container from './Container'
import UserContextP, { UserContext } from '../UserContextProvider.jsx/UserContextP';
const Home = () => {


  // const { logIn, setLogIn, All_post_data, Allpost, user, setpost, calldata } = useContext(UserContext)

  // const {
  //   // handle_click_unlike,handle_click,likecount,setpost,
  //   user
  //   // ,Allpost
  // } = useContext(UserContext)

  const [Allpost,setpost] = useState([])
  const [user,setuser] = useState({})



 const handle_click_unlike= async(data)=>{
    const server = 'http://localhost:5000/api'
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

    // window.location.reload(false);
 }
const handle_click = async(data)=>{
 
  const server = 'http://localhost:5000/api'
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
      // setpost(result.data)
      // set_all_post(result.data)
    }
    //  window.location.reload();

    //  console.log(result);
}

  // const [user, setuser] = useState({})
  // const user={};
  // const history = useHistory();
  const navigate = useNavigate();


  const server = 'http://localhost:5000/api'
  useEffect(()=>{
                     async function calldata(){
                         const res = await fetch(`${server}/home`,
                         {
                             method: "GET",
                             headers: {
                               "Content-Type": "application/json",
                               "auth-token": localStorage.getItem("token"),
                             },
                 }  )
                    const result = await res.json();
                    if(!result.status){
                      navigate("/");
                      console.log({msg:"token is not there"});
                    }else{
                      let t= localStorage.getItem("token")
                      localStorage.setItem("token", t)
                      // setLogIn(true)
                      navigate("/home");
                      // window.location.reload();
                      console.log({t});

                      setpost(result.all_post)
                      setuser(result.user)
                      console.log({post : result.all_post});
                    }

                     }
      calldata()
  },[])

  ///////////////


  console.log({ home_data: Allpost });
  // let t= localStorage.getItem("token")
  // console.log({t});
  return (
    <>
      {/* <Navbar/> */}
      {Allpost.map((data, index) => {
        return (<>
        
          {/* <Container
            
            index={index}
            Allpost={Allpost}
            data={data}
            user={user}
          /> */}
          {/* ///////////////////////////////////////////////////////////////// */}


          <div className="container">
            <div className="container-element">
              <div className='name-block'>
                {data.postedby.Name}
              </div>
              <div className='containt'>
                <div className='title'>
                  {data.title}
                </div>
                <div className='description'>
                  {data.description}
                </div>
                <div className='like-button'>
                  {
                     data.like_id.includes(user._id)
                    // Allpost[props.index].like_id.includes(props.user._id)
                      ?
                      <button style={{ backgroundColor: "red" }} onClick={() => handle_click_unlike(data)}> unlike</button>
                      :
                      <button onClick={() => handle_click(data)}> like</button>
                  }
                  {/* {props.Allpost[props.index]} */}
                  {data.like.length}
                  {/* {likecount.length} */}
                </div>
                <div className='like-by'>
                  {data.like.map((d) => {
                    return (<>
                      <div>
                        {d.email}
                      </div>
                    </>)
                  })}
                </div>
              </div>

            </div>
          </div>




          {/* //////////////////////////// */}
        </>)
      })
      }
    </>
  )
}

function InstagramEmbed() {
  return (
    <div>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/virat.kohli/"
        data-instgrm-version="12"
        style={{
          background: '#FFF',
          border: '0',
          borderRadius: '3px',
          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
          margin: '1px',
          maxWidth: '540px',
          minWidth: '326px',
          padding: '0',
          width: '99.375%',
          height: 'auto', // Change height to auto if you want it to adjust based on content
        }}
      >
        {/* Instagram embedded post */}
      </blockquote>
      <script src="https://www.instagram.com/embed.js"></script>
    </div>
  );
}


export default Home