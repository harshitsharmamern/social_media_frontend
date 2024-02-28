import React,{useState} from 'react'
import Createcontext from './Createcontext'

const Contextstate = (props) => {
// const s1={
   
// }
const host='localhost:5000/';
const [getdata,setdata] =useState('')
const getNote =async()=>{
  
 const res= await fetch(`${host}`)
// console.log(res.json());
const json = await res.json()
setdata(json)
console.log(json);
}

  return (
<>
<Createcontext.Provider value={getdata}>
    {props.children}
</Createcontext.Provider>
</>
  )
}

export default Contextstate