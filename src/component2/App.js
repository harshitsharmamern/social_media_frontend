
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Signup from "./page/Signup.jsx";
import Home from "./page/Home.jsx"
import SearchComponent from "./page/SerchController/SearchComponent.jsx";
import Profile_page from "./page/ProfilePage/Profile_page.jsx";
import Navbar from "./common/Navbar.jsx";

import UserContextP from "./UserContextProvider.jsx/UserContextP.jsx";
import DefaultComponent from "./common/DefaultComponent.jsx";

function App() {
  // let LoginToken = localStorage.getItem("token")
  return (
    <>

      <BrowserRouter>

        <UserContextP>

          <Navbar />
          <Routes>

            <Route exact path="/" index element={<Signup />} />
            <Route exact path="/home" index element={<Home />} />
            <Route path="/search" element={<SearchComponent />} />
            <Route path="/profile" element={<Profile_page />} />

            <Route path="*" element={<DefaultComponent />} />

          </Routes>
        </UserContextP>


      </BrowserRouter>

      {/* </Contextstate> */}


    </>
  );
}

export default App;
