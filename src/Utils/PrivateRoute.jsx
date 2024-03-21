import React from "react";
import { Navigate, Outlet, Route,  } from "react-router-dom";

const PrivateRoutes = ({user}) => {
    console.log(user)
    return user ? <Outlet /> : <Navigate to ="auth" />;
}

export default PrivateRoutes;