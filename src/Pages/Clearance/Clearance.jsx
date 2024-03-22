import React from "react";
import "./Clearance.css"
import { Button, Card, CardContent, CardHeader, CardMedia, Grid, Typography } from "@mui/material";
import FileUploadInput from "../../Components/FileUploadInput/FileUploadInput";
// import leftSectionImg from ""


const Clearance = () => {
    const fileFields = ["PASSPORT", "WAEC RESULT", "JAMB RESULT", "MEDICAL REPORT", "BIRTH CERTIFICATE", "JAMB ADMISSION LETTER", "REFERENCE LETTER"]
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
                    <Card style={{ width: "70%", display:"flex", flexDirection: "column", alignItems: "center"}}>
                        <Typography variant="h5" style={{color: "blue", fontWeight: "bold", textAlign: "center"}}>
                            UPLOAD YOUR DOCUMENTS FOR ADMISSIONS CLEARANCE
                        </Typography>
                        <CardContent>
                            <form className="" autoComplete="off" style={{width: "100%"}} >
                                <Grid container direction="column" alignItems="center" style={{width: "100%"}}>
                                    {fileFields.map((value, ind) => (
                                        <FileUploadInput key={ind} fieldName={value} />
                                        ))}
                                </Grid>
                                <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                                    <Button variant="contained" style={{marginTop: "0.5rem"}}>Submit</Button>
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