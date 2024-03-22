import React from "react";
import DrawerCont from "../../Components/Drawer/DrawerCont";
import Dropdown from "../../Components/Dropdown/DropdownCont";
import { Outlet } from "react-router-dom";
import "./Root.css"


const Root = () => {
    return (
        <div>
            <header className="header">
                <DrawerCont />
                <Dropdown />
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Root;