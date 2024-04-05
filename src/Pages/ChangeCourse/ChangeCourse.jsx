import { Breadcrumbs, Button, TextareaAutosize, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./ChangeCourse.css"

const ChangeCourse = () => {
    return (
        <div className="changeCourseCont">
            <Breadcrumbs separator={<span style={{fontSize: "50px"}} >/</span>} style={{marginLeft: "1rem"}} aria-label="breadcrumb">
                <Link style={{textDecoration: "none"}} href="/Home">
                    <Typography variant="h4" color="#4848a3">Home</Typography>
                </Link>
                <Typography variant="h4" color="#4848a3">Change Of Course</Typography>
            </Breadcrumbs>
            <div style={{width: "100%", display: "flex", justifyContent: "center", paddingTop: "3rem", height: "60%"}}>
                <Typography fontSize= "24px" fontWeight="600">Request:</Typography>
                <TextareaAutosize minRows={12} style={{width: "50%", marginLeft: "3rem", fontSize: "19px", maxHeight: "250px", overflowY: 'auto'}} />
            </div>
            <div style={{width: "100%", display: "flex", justifyContent: "center", marginTop: "3rem"}}>
                <Button 
                    variant="contained"
                    sx={{background: "rgb(105, 101, 101)", width: "20%", ":hover": {
                    background: "rgb(83, 81, 81)"
                    }}}
                    size="large"
                    >
                    Submit
                </Button>
            </div>
        </div>
    )
}

export default ChangeCourse;