import React, { useState } from "react"
import "./Home.css"
import { Typography } from "@mui/material"
const Home = () => {
    const [isUser, setUser] = useState(true)
    return (
        <div className="homeContainer">
            <div style={{ width: "50%", textAlign: "center" }} >
                <Typography variant="h4" color="white" fontWeight="bold">
                    WELCOME TO
                </Typography>
            </div>
            <div style={{ textAlign: "center" }} >
                <Typography variant="h4" color="white" fontWeight="bold">
                    ADMISSIONS OFFICE PORTAL
                </Typography>
            </div>
                <div style={{ margin: "0 16rem", color: "rgb(225 194 175)" }} className="lower-text">
                    <i>
                        There is no end to education. It is not that you read a book, pass an examination and finish with education. The whole of life, from the momemt you are born to the moment you die, is a process of learning.
                    </i>
                </div>
      </div>
    )
    
}

export default Home