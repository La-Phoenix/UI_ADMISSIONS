import React, { useState } from "react";
import "./Clearance.css"
import { Breadcrumbs, Button, Card, CardContent, CardHeader, CardMedia, Grid, Snackbar, SnackbarContent, Typography } from "@mui/material";
import FileUploadInput from "../../Components/FileUploadInput/FileUploadInput";
import axios from "axios";
import { APIBASEURL } from "../../App";
import SnackbarComp from "../../Components/SnackBar/SnackBar";
import { Link } from "react-router-dom";

const fileFields = [{
    name: "PASSPORT",
    ml: "11.5rem"
}, {
    name: "WAEC RESULT",
    ml: "9rem"
}, {
    name:"JAMB RESULT",
    ml: "9.2rem"
}, {
    name: "MEDICAL REPORT",
    ml: "6.5rem"
}, {
    name: "BIRTH CERTIFICATE",
    ml: "5.5rem"
}, {
    name: "JAMB ADMISSION LETTER",
    ml: "0.5rem"
}, {
    name: "REFERENCE LETTER",
    ml: "5rem"
}]

const Clearance = () => {
    let formData = new FormData()
    const [resetFileInput, setResetFileInput] = useState(false);
    const [open, setOpen] = useState(false);
    const [snackBarMsg, setSnackBarMsg] = useState(false);
    const [snackBarColor, setSnackBarColor] = useState('');


    const addFile = (fieldName, file) => {
        formData.set(fieldName, file);
        // for (let [key, value] of formData.entries()) {
        //     console.log(`${key}: ${value}`);
        // }
    }
    
    const submitFiles = async (e) => {
        try {
            const response = await axios.post(`${APIBASEURL}/user/clearance`,  formData)
            console.log(response.data.message)
            setResetFileInput((prev => !prev))
            setSnackBarColor('')
            setSnackBarMsg(response.data.message)
            setOpen(true);
        } catch (error) {
            setResetFileInput(true)
            if (error.response && error.response.data){
                setSnackBarMsg(error.response.data.message)
                setOpen(true);
            } else {
                setSnackBarMsg("Something Went Wrong. Please try again later.")
                setOpen(true);
            }
            setSnackBarColor('red')
        }
    }

    return (
        <div className="clearanceContainer">
            <SnackbarComp open={open} setOpen={setOpen} snackBarMsg= {snackBarMsg} snackBarColor={snackBarColor} />
            <Grid container height="100%">
                <Breadcrumbs separator={<span style={{fontSize: "50px"}} >/</span>} style={{marginLeft: "1rem"}} aria-label="breadcrumb">
                    <Link style={{textDecoration: "none"}} href="/Home">
                        <Typography variant="h3" color="blue">Home</Typography>
                    </Link>
                    <Typography variant="h3" color="blue">Clearance Uploads</Typography>
                </Breadcrumbs>
                <Grid item xs={12} sm={8} className="leftClearanceSection">
                    {fileFields.map((item, index) => (
                        <form >
                            <FileUploadInput key={index} ml={item.ml} label={item.name} />
                        </form>
                    ))}
                </Grid>
                <Grid item xs={12} sm={4} style={{ width: "100%", marginTop: "1rem", height: "100%"}}>
                    <div style={{ height: "50%" }}>
                        <label style={{fontSize: "24px", fontWeight: "500", color: "rgb(83, 81, 81)", marginRight: "1rem"}}>POSTUTME SCORE</label>
                        <input type="number" />
                    </div>
                    <div style={{width: "100%", display: "flex", justifyContent: "center", marginTop: "3rem"}}>
                            <Button 
                                variant="contained"
                                sx={{background: "rgb(105, 101, 101)", width: "30%", ":hover": {
                                    background: "rgb(83, 81, 81)"
                                }}}
                                size="large"
                                >
                                Submit
                            </Button>
                        </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Clearance