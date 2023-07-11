import { NavLink } from "react-router-dom"

function NavTo({title , to}){
    return <div className="navLink-container">
         <NavLink  style={{textDecoration:"none",color:'black'}} to={to}>{title}</NavLink>
    </div>
}

export default NavTo