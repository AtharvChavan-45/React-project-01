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
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        
        <Route path="expert" element={<Expert/>}/>
        <Route path="services" element={<Services/>}/>
        <Route path="login" element={<Login/>}/>
        {/* imp section */}
        <Route path="about" element={<PrivateRouter/>}>
          <Route path="" element={<About/>}/>
        </Route>
         {/* imp section */}
        <Route path="expert" element={<PrivateRouter/>}>
          <Route path="" element={<Expert/>}/>
        </Route>
         {/* imp section */}
        <Route path="services" element={<PrivateRouter/>}>
          <Route path="" element={<Services/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter