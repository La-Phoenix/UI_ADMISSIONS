import { Breadcrumbs, Button, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./OlevelVerify.css"
import FileUploadInput from "../../Components/FileUploadInput/FileUploadInput";

const OlevelVerify = () => {
    return (
        <Container maxWidth={false}  sx={{ height: "100%", pt: "3rem"}}>
            <Breadcrumbs separator={<span style={{fontSize: "50px"}}>/</span>} aria-label="breadcrumb">
                <Link style={{textDecoration: "none"}} href="/Home">
                    <Typography variant="h3" color="blue">Home</Typography>
                </Link>
                <Typography variant="h3" color="blue">Verify O/levels</Typography>
            </Breadcrumbs>
            <div style={{ height:"50%", width: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <form>
                    {["WAEC/NECO", "SCRATCH CARD"].map((item, index) => (
                        <FileUploadInput key={index} label={item} />
                    ))}
                    <div style={{width: "100%", display: "flex", justifyContent: "center", marginTop: "3rem"}}>
                        <Button 
                            variant="contained"
                            sx={{background: "rgb(105, 101, 101)", width: "30%", ":hover": {
                                background: "rgb(83, 81, 81)"
                            }}}
                            size="large"
                            >
                            Verify
                        </Button>
                    </div>
                </form>
            </div>
        </Container>
    )
}

export default OlevelVerify;