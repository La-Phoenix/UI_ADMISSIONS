import React, { useState } from "react"
import DrawerCont from "../../Components/Drawer/DrawerCont"
import Dropdown from "../../Components/Dropdown/DropdownCont"
import "./home.css"
const Home = () => {
    const [isUser, setUser] = useState(true)
    return (
        <div className="homeContainer">
            <header className="header">
                <DrawerCont />
                <Dropdown />
            </header>
        </div>
    )
    
}

export default Home