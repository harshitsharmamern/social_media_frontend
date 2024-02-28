import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

const Courses = () => {
    
    const params=  useParams()
    const server = 'https://newlearner2-backend-deploy.onrender.com/api'

    // const server ='http://localhost:5000/api';

    // const [vertical,setvertivcal] = useState([])
    // const [useris,setuseris] = useState({fName:""})

    // const Navigate = useNavigate();
    useEffect(()=>{
        async function get(){
            const {verticalId} = params
            const response = await fetch(
                `${server}/vertical/${verticalId}/course`,
                {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("auth-token"),
                  },
                }
              );
            //  const y = localStorage.getItem("auth-token")
            //  console.log("je");
            //  console.log(y);
               const res = await response.json()
               console.log(res);
            //    setvertivcal(res.data)
            //    setuseris(res.user)
              
        }
        get()  
    },[])
//   function handlecourse(e){
//      const verticalid = e.target.id; 
//      Navigate(`/inside/vertical/${verticalid}/course`)
//   }
  return (
    <div>Courses</div>
  )
}

export default Courses