import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import "./auth.css"
import { useNavigate } from "react-router-dom";
import SnackbarComp from "../../Components/SnackBar/SnackBar";
import { AuthData } from "../../Utils/AuthWrapper";

const Auth = () => {
    const navigate = useNavigate()
    const { login } = AuthData()
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [open, setOpen] = useState(false);
    const [snackBarMsg, setSnackBarMsg] = useState(false);
    const [snackBarColor, setSnackBarColor] = useState('');

    const handleChange = (e) => {
        setFormData((formData) => ({
            ...formData,
            [e.target.name]: e.target.value
        }));
    }

    const signin = async (event) => {
        event.preventDefault();
        try {
            login(formData)
            navigate('/')
        } catch (error) {
            if (error.response && error.response.data){
                setSnackBarMsg(error.response.data.message)
                setOpen(true);
            } else {
                setSnackBarMsg("Something Went Wrong. Please try again later.")
                setOpen(true);
            }
            setSnackBarColor('red')
        }
    };

    return (
        <div className="auth">
            <Grid container height="100%">
                <SnackbarComp open={open} setOpen={setOpen} snackBarMsg= {snackBarMsg} snackBarColor={snackBarColor} />
                <Grid item xs={12} sm={6} className="leftSection">
                    <div style={{width: "70%", marginTop: "3rem", marginLeft: "5rem"}}>
                        <Typography variant="h2" style={{fontWeight: "bold", color: "white"}}>
                            ADMISSIONS PORTAL SYSTEM
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} style={{display: "flex", alignItems: "center", justifyContent: "center", width: "100%"}}>
                    <form className="" autoComplete="off" style={{width: "70%"}} onSubmit={signin}>
                        <Grid container direction="column" alignItems="center" style={{width: "100%"}}>
                            <Typography variant="h5" style={{color: "brown", fontWeight: "bold", paddingBottom: "1rem"}}>
                                SIGN-IN
                            </Typography>
                            <TextField
                            style={{marginBottom: '2rem', width: "100%" }}
                            required
                            id="email"
                            label="Email"
                            name="email"
                            type="email"
                            variant="outlined"
                            value={formData.email}
                            onChange={handleChange}
                            autoFocus
                            />
                            <TextField
                            style={{marginBottom: '2rem', width: "100%"}}
                            required
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            inputProps={{ minLength: 4 }}
                            variant="outlined"
                            value={formData.password}
                            onChange={handleChange}
                            />
                            <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="large"
                            >
                            Sign In
                            </Button>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </div>
      );
};


export default Auth;