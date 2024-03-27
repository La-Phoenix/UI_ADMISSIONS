import React, { useState } from "react";
import "./Transfer.css"
import { Breadcrumbs, Button, Grid, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Transfer = () => {
    const navigate = useNavigate()
    const [isTranser, setIsTransfer] = useState(false)
    return (
        <div className="transferContainer">
             {/* <SnackbarComp open={open} setOpen={setOpen} snackBarMsg= {snackBarMsg} snackBarColor={snackBarColor} /> */}
            <Breadcrumbs separator={<span style={{fontSize: "20px"}} >/</span>}>
                <Link style={{textDecoration: "none"}} href="/Home">
                    <Typography variant="h3" color="blue">Home</Typography>
                </Link>
                <Typography variant="h3" color="blue">Transfer</Typography>
            </Breadcrumbs>
            {
                !isTranser? (
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "80%"}}>
                        <Typography fontWeight="600" variant="h4" color="blue" mb="2rem">DO YOU WANT TO TRANSFER</Typography>
                        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                            <Button 
                                variant="contained"
                                sx={{background: "rgb(105, 101, 101)", height: "100%", marginRight: "2rem", width: "10%", ":hover": {
                                background: "rgb(83, 81, 81)"
                                }}}
                                size="large"
                                onClick={() => {
                                    setIsTransfer(true)
                                }}
                                >
                                YES
                            </Button>
                            <Button 
                                variant="contained"
                                sx={{background: "rgb(105, 101, 101)", height: "100%", width: "10%", ":hover": {
                                background: "rgb(83, 81, 81)"
                                }}}
                                size="large"
                                onClick={() => {
                                    navigate("/home")
                                }}
                                >
                                NO
                            </Button>
                        </div>
                    </div>
                ): (
                    <Grid container height="80%" style={{marginTop: "1rem"}}>
                    <Grid item xs={12} sm={6}>
                        <div style={{height: "15%"}}>
                            <label  style={{fontSize: "20px", fontWeight: "500", color: "rgb(83, 81, 81)"}}>OLD DEPARTMENT:</label>
                            <input style={{height: "60%", marginLeft: "2rem", fontSize: "19px"}}/>
                        </div>
                        <Grid container height="60%" style={{marginTop: "2rem"}}>
                            <Grid item xs={12} sm={4}>
                                <label  style={{fontSize: "20px", fontWeight: "500", color: "rgb(83, 81, 81)"}}>O/LEVEL SUBJECTS:</label>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <input style={{height: "15%", marginTop: "1rem", display: "block", fontSize: "19px"}}/>
                                <input style={{height: "15%", marginTop: "1rem", display: "block", fontSize: "19px"}}/>
                                <input style={{height: "15%", marginTop: "1rem", display: "block", fontSize: "19px"}}/>
                                <input style={{height: "15%", marginTop: "1rem", display: "block", fontSize: "19px"}}/>
                                <input style={{height: "15%", marginTop: "1rem", display: "block", fontSize: "19px"}}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6} style={{ width: "100%", marginTop: "1rem", height: "60%"}}>
                    <div style={{height: "15%"}}>
                            <label  style={{fontSize: "20px", fontWeight: "500", color: "rgb(83, 81, 81)"}}>NEW DEPARTMENT:</label>
                            <input style={{height: "60%", marginLeft: "2rem", fontSize: "19px"}}/>
                        </div>
                        <Grid container height="60%" style={{marginTop: "2rem"}}>
                            <Grid item xs={12} sm={4}>
                                <label  style={{fontSize: "20px", fontWeight: "500", color: "rgb(83, 81, 81)"}}>JAMB SUBJECTS:</label>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <input style={{height: "17%", marginTop: "1rem", display: "block", fontSize: "19px"}}/>
                                <input style={{height: "17%", marginTop: "1rem", display: "block", fontSize: "19px"}}/>
                                <input style={{height: "17%", marginTop: "1rem", display: "block", fontSize: "19px"}}/>
                                <input style={{height: "17%", marginTop: "1rem", display: "block", fontSize: "19px"}}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                    <Button 
                        variant="contained"
                        sx={{background: "rgb(105, 101, 101)", height: "36%", width: "20%", ":hover": {
                        background: "rgb(83, 81, 81)"
                        }}}
                        size="large"
                        >
                        Verify
                    </Button>
                </div>
                </Grid>
                )
            }        
        </div>
    )
}

export default Transfer;