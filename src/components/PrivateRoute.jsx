import React, { Children } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children}) => {
    const token = localStorage.getItem("token");
    return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

///create token for a successful login using local storage after here