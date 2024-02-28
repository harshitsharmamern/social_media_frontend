import React, { useContext } from 'react'
import Createcontext from './context/Createcontext'

const C = () => {
    const a = useContext(Createcontext)
    
  return (<>
    <div>C</div>
    {a.state.name}
    <button onClick={a.update}>cupdate</button>
  </>
  
  )
}

export default C