import React from "react";
import { Redirect } from 'react-router-dom'

function Logout() {
    localStorage.removeItem("id");
    localStorage.removeItem("image");
    localStorage.removeItem("name");
    localStorage.removeItem("lastname");
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    localStorage.removeItem("role")
    return <Redirect to = '/'/>
}


export default Logout;