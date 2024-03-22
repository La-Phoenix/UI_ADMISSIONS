import React from "react";
import DrawerCont from "../../Components/Drawer/DrawerCont";
import Dropdown from "../../Components/Dropdown/DropdownCont";
import { Outlet } from "react-router-dom";
import "./Root.css"


const Root = () => {
    return (
        <>
            <header className="header">
                <DrawerCont />
                <Dropdown />
            </header>
            <main style={{minHeight: "92%"}}>
                <Outlet />
            </main>
        </>
    )
}

export default Root;