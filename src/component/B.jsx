import React, { useEffect } from 'react'
import { useState } from 'react';
const B = () => {
  const url = 'http://localhost:4000/get'
  const [named, setname] = useState("")
  // var ans;
  // const getdata=async()=>{



  // console.log(
  //   ans.map((d)=>{
  //     return(
  //     d)
  //   })
  // ); 


  // console.log(ans);
  // }
  // useEffect(getdata,[])
  // useEffect(getdata,[])
  useEffect(async () => {
    const ans = await fetch(
      url
                            ).then((response) => response.text());
    console.log(ans);
    setname(ans)
    // console.log(named);
  }, [])
  // console.log(named);


  return (
    <>
      {/* <button onClick={getdata}>click</button> */}

      {/* {named[0].name} */}
      {/* {ans} */}
      {named}
      {/* {named.map((d)=>{
      return(<>
     {d.name}
     </>
      )
    })} */}
    </>

  )
}

export default B