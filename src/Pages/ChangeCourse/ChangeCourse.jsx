import { Breadcrumbs, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./ChangeCourse.css"

const ChangeCourse = () => {
    return (
        <div className="changeCourseCont">
            <Breadcrumbs separator={<span style={{fontSize: "50px"}} >/</span>} style={{marginLeft: "1rem"}} aria-label="breadcrumb">
                <Link style={{textDecoration: "none"}} href="/Home">
                    <Typography variant="h3" color="blue">Home</Typography>
                </Link>
                <Typography variant="h3" color="blue">Clearance Uploads</Typography>
            </Breadcrumbs>
        </div>
    )
}

export default ChangeCourse;