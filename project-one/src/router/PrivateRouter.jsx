import React from 'react';
import { Navigate,Outlet} from "react-router-dom";
// check user is logged in our not
const PrivateRouter = () => {
  const user = false;
  return (
    // check user is there or not
    // if user is there then allow to go to about page otherwise redirect to login page
  <div>
    {user ? <Outlet/> : <Navigate to="/login"/>}
  </div>);
};

export default PrivateRouter