import './App.css';

import Contextstate from './component/context/Contextstate';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './component/Nav/Navbar';
// import Home from './component/Nav/Home';
import Home from './component/context/Home';
import About from './component/Nav/About';
import Signup from './component/context/user_regis/Signup';
import Signin from './component/context/user_regis/Signin';
import Inside from './component/context/Screen/Inside';
import Courses from './component/context/Screen/Courses';
import SearchComponent from './component2/page/SerchController/SearchComponent';
function App() {

  return (
   <>
   {/* <Contextstate> */}
    <BrowserRouter> 
   {/* <Navbar/> */}

   <Routes>
   {/* {localStorage.getItem('auth-token') ? <Route path="/inside" element={<Inside />} />  :
   <Route path="/signin" element={<Signin />} />  
   }  */}
          <Route exact path="/" index element={<Signin />} />
          {/* <Route exact path="/home" index element={<Home />} /> */}

          <Route path="/about" element={<About text="hello from props" />} />  
         
          <Route path="/signup" element={<Signup />} />  
          <Route  path="/signin" element={<Signin />} />   
           <Route path="/home" element={<Inside />} /> 
           <Route path="/search" element={<SearchComponent />} />    
   
          <Route path="/inside/vertical/:verticalId/course" element={<Courses />} /> 
          
          {/* /inside/vertical/${verticalid}/course
          <Route
        path="/admin/verticals/:verticalId/courses/all"
        element={<AdminCourses />}
      /> */}
    </Routes>


        </BrowserRouter>

   {/* </Contextstate> */}
  
   
   </>
  );
}

export default App;
