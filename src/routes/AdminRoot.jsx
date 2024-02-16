import SidebarAdmin from "../components/SidebarAdmin"
import { Outlet } from "react-router-dom"
export default function AdminRoot(){
    return(
        <div>
            <SidebarAdmin/>
            <Outlet/>
        </div>
    )
}