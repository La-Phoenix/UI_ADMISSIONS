import { Divider, Grid, Paper } from "@mui/material";
import React from "react";
import "./auth.css"

const Auth = () => {
    return (
        <div className="auth">
            <Grid container spacing={3} height="100%">
                <Grid item xs={6} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                        Left Section
                </Grid>
                <Grid item xs={6} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                        Right Section
                </Grid>
            </Grid>
        </div>
      );
};


export default Auth;