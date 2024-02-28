import React from 'react'
import { useState } from 'react';
const A = async() => {
const [pre,setda] = useState("")
 var res =await fetch('http://localhost:3000/get')
 .then(data => {
   return data.json();
 })
 setda(res)
//   var res = await fetch('http://localhost:4000/get')
//   .then(data => {
//     return data.json();
//   })
// console.log(res);
console.log(pre);
  return (<>

{/* {pre} */}kjas
  </>

  )
}


export default A;