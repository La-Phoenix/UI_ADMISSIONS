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
            <Breadcrumbs separator={<span style={{fontSize: "40px"}} >/</span>} style={{marginLeft: "5rem"}}>
                <Link style={{textDecoration: "none"}} href="/Home">
                    <Typography variant="h4" color="#4848a3">Home</Typography>
                </Link>
                <Typography variant="h4" color="#4848a3">Clearance Uploads</Typography>
            </Breadcrumbs>
            <div className="clearanceMain" style={{ display: "flex"}}>
                <div className="leftClearanceSection">
                    {fileFields.map((item, index) => (
                        <FileUploadInput key={index} ml={item.ml} label={item.name} addFile={addFile} resetFlag={resetFlag} fieldName={item.fieldName} />
                    ))}
                </div>
                <div  className="otherClearanceSection" style={{ width: "40%", marginTop: "1rem", height: "100%", display: "flex", justifyContent: "center"}}>
                    <div style={{ height: "50%" }}>
                        <label style={{fontSize: "24px", fontWeight: "500", color: "rgb(83, 81, 81)", marginRight: "1rem"}}>POSTUTME SCORE</label>
                        <input  type="number" ref={fileInputRef} onChange={handleScoreChange}/>
                    </div>
                </div>
            </div>
            <div style={{width: "100%", display: "flex", justifyContent: "center", marginTop: "1rem", height: "15%"}}>
                <Button 
                variant="contained"
                className="button"
                sx={{background: "rgb(105, 101, 101)", height: "50%" , ":hover": {
                    background: "rgb(83, 81, 81)"
                    }}}
                    size="large"
                    onClick={submitFiles}
                    >
                    Submit
                    </Button>
            </div>
        </div>
    )
}

export default Clearance