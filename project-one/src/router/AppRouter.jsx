import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Expert from "../pages/expert/Expert";
import Services from "../pages/services/Services";
import Login from "../pages/login/Login";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    // create routes for all the pages
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        {/* public routes any user can access */}
        <Route path="/" element={<Home/>}/>
        <Route path="login" element={<Login/>}/>

        {/* private routes only accessible if logged in */}
        
        <Route path="about" element={<PrivateRouter/>}>
          <Route path="" element={<About/>}/>
        </Route>
       
        <Route path="expert" element={<PrivateRouter/>}>
          <Route path="" element={<Expert/>}/>
        </Route>
        
        <Route path="services" element={<PrivateRouter/>}>
          <Route path="" element={<Services/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter