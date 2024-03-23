import React, { useState } from "react";
import "./Clearance.css"
import { Button, Card, CardContent, CardHeader, CardMedia, Grid, Snackbar, SnackbarContent, Typography } from "@mui/material";
import FileUploadInput from "../../Components/FileUploadInput/FileUploadInput";
import axios from "axios";
import { APIBASEURL } from "../../App";
import SnackbarComp from "../../Components/SnackBar/SnackBar";

const fileFields = ["PASSPORT", "WAEC RESULT", "JAMB RESULT", "MEDICAL REPORT", "BIRTH CERTIFICATE", "JAMB ADMISSION LETTER", "REFERENCE LETTER"]

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
            <Grid container height="100%">
                <Grid item xs={12} sm={6} className="leftClearanceSection">
                    <div className="background-div"></div>
                    <CardMedia
                        component="img"
                        image="/Images/IMG_4583.JPG"
                        alt="Description of the image"
                        style={{ width: '70%', height: '70%', objectFit: 'cover' }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} style={{display: "flex", alignItems: "center", justifyContent: "center", width: "100%", marginTop: "1rem"}}>
                    <SnackbarComp open={open} setOpen={setOpen} snackBarMsg= {snackBarMsg} snackBarColor={snackBarColor} />
                    <Card style={{ width: "70%", display:"flex", flexDirection: "column", alignItems: "center"}}>
                        <Typography variant="h5" style={{color: "blue", fontWeight: "bold", textAlign: "center"}}>
                            UPLOAD YOUR DOCUMENTS FOR ADMISSIONS CLEARANCE
                        </Typography>
                        <CardContent>
                            <form className="" autoComplete="off" style={{width: "100%"}}>
                                <Grid container direction="column" alignItems="center" style={{width: "100%"}}>
                                    {fileFields.map((value, ind) => (
                                        <FileUploadInput key={ind} fieldName={value} resetFlag={resetFileInput} addFile={addFile} />
                                        ))}
                                </Grid>
                                <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                                    <Button variant="contained" style={{marginTop: "0.5rem"}} onClick={submitFiles}>Submit</Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default Clearance