import React from "react";
import DrawerCont from "../../Components/Drawer/DrawerCont";
import { Outlet } from "react-router-dom";
import "./Root.css"
import { AppBar, Box, Toolbar, Typography } from "@mui/material";


const Root = () => {
    return (
        <>
            <header className="header">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{background: "#fff"}}>
                    <Toolbar style={{display: "flex", justifyContent: "space-between"}}>
                        <DrawerCont />
                    <div style={{display: "flex"}}>
                        <div>
                            <Typography variant="h6" color="blue" fontWeight="bold">
                                THE UNIVERSITY OF IBADAN
                            </Typography>
                            <Typography variant="h7" color="rgb(225 194 175)" fontWeight="bold" ml="3rem">
                                RECTE SAKPERE FONS
                            </Typography>
                        </div>
                        <img src="/Images/IMG_4577.JPG" alt="University Of Ibadan Logo" height="64px"/>
                    </div>
                    </Toolbar>
                </AppBar>
                </Box>
            </header>
            <main style={{height: "92%"}}>
                <Outlet />
            </main>
        </>
    )
}

export default Root;