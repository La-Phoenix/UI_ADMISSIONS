import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import "./auth.css"
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Auth = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData((formData) => ({
            ...formData,
            [e.target.name]: e.target.value
        }));
    }

    const signin = async (event) => {
        event.preventDefault();
        console.log(formData)
        try {
            const resp = await axios.post('http://localhost:5000/api/user/signin', formData)
            localStorage.setItem("Profile", JSON.stringify(resp.data));
            navigate('/home')
        } catch (error) {
            console.log(error.response.data.message)
        }
    };

    return (
        <div className="auth">
            <Grid container height="100%">
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