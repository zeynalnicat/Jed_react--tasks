import React from "react"

import "./index.css"
import NavTo from "../NavTo"

function Header(){
    return<div>
        <div className="header">
           <h1> Men's Fashion </h1>
        </div>
        <nav>
        <NavTo title="Home" to="/"/>
        <NavTo title="About" to="/about"/>
        <NavTo title="Contact" to="/contact"/>
    </nav>
    </div>
}


export default Header