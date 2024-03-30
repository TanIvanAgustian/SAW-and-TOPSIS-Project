import SidebarAdmin from "../components/SidebarAdmin"
import { Outlet } from "react-router-dom"
export default function AdminRoot(){
    return(
        <div>
            <SidebarAdmin/>
            <div className="p-4 lg:ml-64">
    <div className="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700 mt-14">
      <Outlet/>
    </div>
  </div>
            
        </div>
    )
}