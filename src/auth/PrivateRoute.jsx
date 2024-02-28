import { Outlet, Navigate } from "react-router-dom";
import { getAuthCookiePosition } from "./cookies";

export default function LoggedIn(){
    const position = getAuthCookiePosition()
    return (position == "Admin" ? <Navigate to="/admin" replace /> : <Outlet/>)
}

export function LoggedOut(){
    const position = getAuthCookiePosition()
    return (!position ? <Navigate to="/login" replace /> : <Outlet/>)
}
