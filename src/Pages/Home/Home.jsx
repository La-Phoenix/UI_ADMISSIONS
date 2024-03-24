import React, { useState } from "react"
import DrawerCont from "../../Components/Drawer/DrawerCont"
import Dropdown from "../../Components/Dropdown/DropdownCont"
import "./Home.css"
import { Box, Container, Typography } from "@mui/material"
const Home = () => {
    const [isUser, setUser] = useState(true)
    return (
        <Container maxWidth="lg" className="homeContainer">
            <div style={{ height: "50%", width: "50%" }} >
                <Typography variant="h3" color="white" fontWeight="bold" textAlign="center">
                    WELCOME TO ADMISSIONS OFFICE PORTAL
                </Typography>
                <div style={{ height: "50%", width: "70%", marginLeft: "auto", marginRight: "auto", color: "rgb(225 194 175)" }}>
                    <i>
                        There is no end to education. It is not that you read a book, pass an examination and finish with education. The whole of life, from the momemt you are born to the moment you die, is a process of learning.
                    </i>
                </div>
            </div>
      </Container>
    )
    
}

export default Home