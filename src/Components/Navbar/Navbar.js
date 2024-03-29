
// import React, { useState } from "react";
import "./NavBar.css";
const NavBar = (props) => {
    // const [activeTab, setActiveTab] = useState("Home");
    return (

        <nav>
            <ul id="list">
                <li><button name="Home" onClick={(e) => props.setActiveTab(e.target.name)}>Home</button></li>
                <li><button name="All Countries" onClick={(e) => props.setActiveTab(e.target.name)}>All Countries</button></li>
                <li><button name="My Records" onClick={(e) => props.setActiveTab(e.target.name)}>My Records</button></li>
            </ul>
        </nav>

    )
}
export default NavBar;