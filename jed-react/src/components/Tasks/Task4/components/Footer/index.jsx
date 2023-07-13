import { useContext } from "react"
import { UserContext } from "../../../Task5/context/Context"

function Footer(){
    const {ad}=useContext(UserContext)
    return <div style={{backgroundColor:'#ddd',marginTop:50, padding:20 , justifySelf:"flex-end"    }}>
       &copy; 2023 All rights reserved.
       <h1 style={{textAlign:"center"}}>Username : {ad}</h1>
    </div>
}

export default Footer