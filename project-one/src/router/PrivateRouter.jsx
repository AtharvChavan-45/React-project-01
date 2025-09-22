import React from 'react';
import { Navigate,Outlet} from "react-router-dom";
// check user is logged in our not
const PrivateRouter = () => {
  const user = false;
  return (
  <div>
    {user ? <Outlet/> : <Navigate to="/login"/>}
  </div>);
};

export default PrivateRouter