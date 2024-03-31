import React, { useRef, useState } from "react";
import "./Clearance.css"
import { Breadcrumbs, Button, Card, CardContent, CardHeader, CardMedia, Grid, Snackbar, SnackbarContent, Typography } from "@mui/material";
import FileUploadInput from "../../Components/FileUploadInput/FileUploadInput";
import axios from "axios";
import { APIBASEURL } from "../../App";
import SnackbarComp from "../../Components/SnackBar/SnackBar";
import { Link } from "react-router-dom";

const fileFields = [{
    name: "PASSPORT",
    ml: "11.5rem",
    fieldName: "PASSPORT"
}, {
    name: "WAEC RESULT",
    fieldName: "WAEC_RESULT",
    ml: "9rem"
}, {
    name:"JAMB RESULT",
    fieldName:"JAMB_RESULT",
    ml: "9.2rem"
}, {
    name: "MEDICAL REPORT",
    fieldName: "MEDICAL_REPORT",
    ml: "6.5rem"
}, {
    name: "BIRTH CERTIFICATE",
    fieldName: "BIRTH_CERTIFICATE",
    ml: "5.5rem"
}, {
    name: "JAMB ADMISSION LETTER",
    fieldName: "JAMB_ADMISSION_LETTER",
    ml: "0.5rem"
}, {
    name: "REFERENCE LETTER",
    fieldName: "REFERENCE_LETTER",
    ml: "5rem"
}]

const Clearance = () => {
    const fileInputRef = useRef(null);
    let formData = new FormData()
    const user = JSON.parse(localStorage.getItem("Profile"));
    const [resetFlag, setResetFlag] = useState(false);
    const [open, setOpen] = useState(false);
    const [snackBarMsg, setSnackBarMsg] = useState(false);
    const [snackBarColor, setSnackBarColor] = useState('');
    const [postUtmeScore, setPostUtmeScore] = useState(undefined);


    const addFile = (fieldName, file) => {
        formData.set(fieldName, file);
    }
    
    const handleScoreChange = (e) => {
        setPostUtmeScore(e.target.value)
    }

    const submitFiles = async (e) => {
        console.log(postUtmeScore)
        formData.set('postUtmeScore', postUtmeScore)
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
                        <FileUploadInput key={index} ml={item.ml} label={item.name} addFile={addFile} resetFlag={resetFlag} fieldName={item.fieldName} />
                    ))}
                </Grid>
                <Grid item xs={12} sm={4} style={{ width: "100%", marginTop: "1rem", height: "100%"}}>
                    <div style={{ height: "50%" }}>
                        <label style={{fontSize: "24px", fontWeight: "500", color: "rgb(83, 81, 81)", marginRight: "1rem"}}>POSTUTME SCORE</label>
                        <input type="number" ref={fileInputRef} onChange={handleScoreChange} />
                    </div>
                    <div style={{width: "100%", display: "flex", justifyContent: "center", marginTop: "3rem"}}>
                            <Button 
                                variant="contained"
                                sx={{background: "rgb(105, 101, 101)", width: "30%", ":hover": {
                                    background: "rgb(83, 81, 81)"
                                }}}
                                size="large"
                                onClick={submitFiles}
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