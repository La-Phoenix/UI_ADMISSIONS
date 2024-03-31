import { Box, Breadcrumbs, Button, Container, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./OlevelVerify.css"
import FileUploadInput from "../../Components/FileUploadInput/FileUploadInput";
import axios from "axios";
import { APIBASEURL } from "../../App";
import SnackbarComp from "../../Components/SnackBar/SnackBar";

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: "20%",
    backgroundColor: 'white',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: 24,
    p: 4,
  }

const OlevelVerify = () => {
    const user = JSON.parse(localStorage.getItem("Profile"));
    const [resetFlag, setResetFlag ] = useState(false)
    const [open, setOpen ] = useState(false)
    const [openSnack, setOpenSnack ] = useState(false)
    const [snackBarMsg, setSnackBarMsg] = useState(false);
    const [snackBarColor, setSnackBarColor] = useState('');

    const [isDocSubmitted, setIsDocSubmitted ] = useState(false)
    let formData = new FormData()

    const submit = async () => {
        try {
            const resp = await axios.post(`${APIBASEURL}/user/olevelverify`, formData, {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            })
            setSnackBarMsg(resp.data.message)
            setSnackBarColor('')
            setOpenSnack(true);
            setIsDocSubmitted(true)
        } catch (error) {
            if (error.response && error.response.data){
                setSnackBarMsg(error.response.data.message)
                setOpenSnack(true);
            } else {
                setSnackBarMsg("Something Went Wrong. Please try again later.")
                setOpenSnack(true);
            }
            setSnackBarColor('red')
        }
        setResetFlag(prev => !prev)
    }

    const addFile = (fieldName, file) => {
        formData.set(fieldName, file)
    }

    return (
            <Container maxWidth={false}  sx={{ height: "100%", paddingTop: "3rem"}}>
                <SnackbarComp open={openSnack} setOpen={setOpenSnack} snackBarMsg= {snackBarMsg} snackBarColor={snackBarColor} />
                <Breadcrumbs separator={<span style={{fontSize: "30px"}}>/</span>} aria-label="breadcrumb">
                    <Link style={{textDecoration: "none"}} href="/Home">
                        <Typography variant="h4" color="#4848a3">Home</Typography>
                    </Link>
                    <Typography variant="h4" color="#4848a3">Verify O/levels</Typography>
                </Breadcrumbs>
            {
                isDocSubmitted ? (
                    <div style={{height: "80%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <Button 
                            variant="contained"
                            sx={{background: "rgb(105, 101, 101)", width: "25%", height: "15%", fontSize: "1.5rem", fontWeight: "600", ":hover": {
                                    background: "rgb(83, 81, 81)"
                                }, borderRadius: "10px"}}
                            size="large"
                            onClick={() => setOpen(true)}
                            >
                            CHECK STATUS
                        </Button>
                        <Modal
                            open={open}
                            onClose={() => setOpen(false)}
                        >
                            <Box style={modalStyle}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    O/LEVEL VERIFICATION STATUS
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    IN PROGRESS.
                                </Typography>
                            </Box>
                        </Modal>
                    </div>
                ) : (
                        <div style={{ height:"50%", width: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <form>
                                {[{
                                    name: "WAEC/NECO",
                                    fieldName: "WAEC_NECO",
                                    ml: "1.8rem"
                                }, {
                                    name: "SCRATCH CARD",
                                    fieldName: "SCRATCH_CARD",
                                    ml: "0"
                                }].map((item, index) => (
                                    <FileUploadInput key={index} label={item.name} fieldName={item.fieldName} ml={item.ml} addFile={addFile} resetFlag={resetFlag} />
                                ))}
                                <div style={{width: "100%", display: "flex", justifyContent: "center", marginTop: "3rem"}}>
                                    <Button 
                                        variant="contained"
                                        sx={{background: "rgb(105, 101, 101)", width: "30%", ":hover": {
                                            background: "rgb(83, 81, 81)"
                                        }, borderRadius: "10px"}}
                                        size="large"
                                        onClick={submit}
                                        >
                                        Verify
                                    </Button>
                                </div>
                            </form>
                        </div>
                )
            }
            </Container>
    )
}

export default OlevelVerify;