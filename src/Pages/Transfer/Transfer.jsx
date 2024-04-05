import React, { useState } from "react";
import "./Transfer.css"
import { Breadcrumbs, Button, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import SnackbarComp from "../../Components/SnackBar/SnackBar";
import { AuthData } from "../../Utils/AuthWrapper";

const science = [
    {
        name: "computer science",
        jambSubj: ["mathematics", "english language", "physics", "chemistry"],
        olevelSubj: ["mathematics", "english language", "biology", "physics", "chemistry"],
        // optJambSubj: ["crs/irs", "economics", "history", "geography"],
        // optOlevelSubj: ["chemistry", "agric", "", "geography", "commerce"],
        postUtmeScore: "70.75"
    },
    {
        name: "physics",
        jambSubj: ["mathematics", "english language", "physics", "chemistry"],
        olevelSubj: ["mathematics", "english language", "biology", "physics", "chemistry"],
        postUtmeScore: "50"
    },
    {
        name: "chemistry",
        jambSubj: ["mathematics", "english language", "physics", "chemistry"],
        olevelSubj: ["mathematics", "english language", "biology", "physics", "chemistry"],
        // optJambSubj: ["crs/irs", "economics", "history", "geography"],
        // olevelSubj: ["mathematics", "english", "biology", "physics", "chemistry"],
        postUtmeScore: "50"
    }   
]

const arts = [
        {
            name: "law",
            jambSubj: ["history", "english language", "literature", "government"],
            olevelSubj: ["history", "english language", "government", "literature", "mathematics"],
            // optJambSubj: ["crs/irs", "economics", "history", "geography"],
            // optOlevelSubj: ["crs/irs", "economics", "history", "geography", "commerce"],
            postUtmeScore: "67.25"
        }
]

const availableDeps = ["Computer Science", "Physics", "Chemistry", "Law"]
const scienceSubjs = ["English Language", "Mathematics", "Civic Education", "Biology", "Physics", "Chemistry", "Further Mathematics", "Agricultural Science", "Geography", "Technical Drawing", "Tourism"]
const artSubjs = [
    "Mathematics",
    "English Language",
    "Literature in English",
    "Government",
    "Christian Religious Studies",
    "Islamic Religious Studies",
    "History",
    "Geography",
    "Economics",
    "Yoruba",
    "Visual Arts",
    "Theatre Arts",
    "Sociology",
    "Psychology"
];

const Transfer = () => {
    const { user } = AuthData()
    const [formData, setFormData] = useState([])
    const [availableDeps1, setAvailableDeps1] = useState(["Computer Science", "Physics", "Chemistry", "Law"])
    const [availableDeps2, setAvailableDeps2] = useState(["Computer Science", "Physics", "Chemistry", "Law"])
    const [oldDep, setOldDep] = useState("")
    const [newDep, setNewDep] = useState("")
    const [olevelFields, setOlevelFields] = useState(["", "", "", "", ""])
    const [olevelSubj, setOlevelSubj] = useState([])
    const [jambFields, setJambFields] = useState(["", "", "", ""])
    const [jambSubj, setJambSubj] = useState([])
    const navigate = useNavigate()
    const [isTranser, setIsTransfer] = useState(false)

    const [open, setOpen] = useState(false);
    const [snackBarMsg, setSnackBarMsg] = useState(false);
    const [snackBarColor, setSnackBarColor] = useState('');
    const [isInputErrors, setISInputErrors] = useState({
        input1: false,
        input2: false,
        input3: false,
        input4: false,
        input5: false,
        input6: false,
        input7: false,
        input8: false,
        input9: false,
        input10: false,
    });
    const [inputError, setInputError] = useState({
        input1: "",
        input2: "",
        input3: "",
        input4: "",
        input5: "",
        input6: "",
        input7: "",
        input8: "",
        input9: "",
        input10: "",
    });

    const validateSubjects = (stuSubjs, reqSubjs) => {
        const uniqStuSub = [...new Set(stuSubjs)]
        console.log(uniqStuSub)
        console.log(reqSubjs)
        return uniqStuSub.length === reqSubjs.length && uniqStuSub.every((sub) => reqSubjs.includes(sub.toLowerCase()))
    }

    const submit = () => {
        console.log(user)
        console.log(oldDep)
        console.log(newDep)
        console.log(olevelFields)
        console.log(jambFields)
        if(!oldDep) {
            setSnackBarMsg("Old Department Is Required")
            setSnackBarColor("red")
            setOpen(true)
            return;
        }
        
        if(!newDep) {
            setSnackBarMsg("New Department Is Required")
            setSnackBarColor("red")
            setOpen(true)
            return; 
        }
        
        const olevelInvalid = olevelFields.some(element => element === "");
        const jambInValid = jambFields.some(element => element === "");
        if(olevelInvalid) {
            setSnackBarMsg("All O/level fields are required")
            setSnackBarColor("red")
            setOpen(true)
            return; 
        }
        if(jambInValid) {
            setSnackBarMsg("All JAMB fields are required")
            setSnackBarColor("red")
            setOpen(true)
            return; 
        }
        
        let reqOlvlSubjs;
        let reqJambSubjs;
        const isNewScience = science.find((dep) => dep.name === newDep.toLowerCase())
        if (!user.postUtmeScore) {
            setSnackBarMsg("Pease complete your clearance to proceed department transfer")
            setSnackBarColor("red")
            setOpen(true)
            return; 
        }
        if (isNewScience) {
            console.log(user.postUtmeScore)
            console.log(isNewScience.postUtmeScore)
            if(user.postUtmeScore < isNewScience.postUtmeScore) {
                setSnackBarMsg("Student not eligible: POST-UTME score requirement not met")
                setSnackBarColor("red")
                setOpen(true)
                return;
            }
            reqOlvlSubjs = isNewScience.olevelSubj;
            reqJambSubjs = isNewScience.jambSubj;
        }
        const isNewArts = arts.find((dep) => dep.name === newDep.toLowerCase())
        if (isNewArts) {
            reqOlvlSubjs = isNewArts.olevelSubj
            reqJambSubjs = isNewScience.jambSubj;
        }
        if (isNewScience) {
            const isOldScience = science.find((dep) => dep.name === oldDep.toLowerCase())
            if(!isOldScience) {
                setSnackBarMsg("Student not eligible: Faculty requirement not met")
                setSnackBarColor("red")
                setOpen(true)
                return;
            }
        }
        if (isNewArts) {
            console.log(user.postUtmeScore)
            console.log(isOldArts.postUtmeScore)
            if(user.postUtmeScore < isNewArts.postUtmeScore) {
                setSnackBarMsg("Student not eligible: POST-UTME score requirement not met")
                setSnackBarColor("red")
                setOpen(true)
                return;
            }
            const isOldArts = arts.find((dep) => dep.name === oldDep.toLowerCase())
            if(!isOldArts) {
                setSnackBarMsg("Student not eligible: Faculty requirement not met")
                setSnackBarColor("red")
                setOpen(true)
                return;
            }
        }
         
        if(!validateSubjects(olevelFields, reqOlvlSubjs)){
            setSnackBarMsg("Student not eligible: O/LEVEL subject requirement not met")
            setSnackBarColor("red")
            setOpen(true)
            return;
        }
        if(!validateSubjects(jambFields, reqJambSubjs)){
            setSnackBarMsg("Student not eligible: JAMB subject requirement not met")
            setSnackBarColor("red")
            setOpen(true)
            return;
        }
    }

    const handleInputChange = (index, event, subjs, setSubj, setDropDownSubjs) => {
        const newInputValues = [...subjs];
        newInputValues[index] = event.target.value;
        setSubj(newInputValues);
        // setDropDownSubjs((prev) => prev.filter((_subj) => _subj !== event.target.value))
        // console.log(event.target.value)
        // console.log(olevelSubj, jambSubj)
    };

    const onInput1Change = (e) => {
        const newDeps = availableDeps.filter((dep) => dep !== e.target.value)
        if (e.target.value === newDep) {
            setNewDep("")
        }
        setAvailableDeps2(newDeps)
        setOldDep(e.target.value)
        const isScience = science.find((dep) => dep.name === e.target.value.toLowerCase())
        setOlevelSubj(scienceSubjs)
        if(!isScience) {
            const isArt = arts.find((dep) => dep.name === e.target.value.toLowerCase())
            setOlevelSubj(artSubjs)
        }
    }

    const onInput2Change = (e) => {
        setNewDep(e.target.value)
        const isScience = science.find((dep) => dep.name === e.target.value.toLowerCase())
        setJambSubj(scienceSubjs)
        if(!isScience) {
            const isArt = arts.find((dep) => dep.name === e.target.value.toLowerCase())
            setJambSubj(artSubjs)
        }
    }

    return (
        <div className="transferContainer">
             <SnackbarComp open={open} setOpen={setOpen} snackBarMsg= {snackBarMsg} snackBarColor={snackBarColor} />
            <Breadcrumbs separator={<span style={{fontSize: "40px"}} >/</span>} style={{marginLeft: "5rem"}}>
                <Link style={{textDecoration: "none"}} href="/Home">
                    <Typography variant="h4" color="#4848a3">Home</Typography>
                </Link>
                <Typography variant="h4" color="#4848a3">Transfer</Typography>
            </Breadcrumbs>
            {
                !isTranser? (
                    <div className="isTransferDiv" style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "80%", paddingLeft: "3rem"}}>
                        <Typography fontWeight="600" variant="h4" color="#4848a3" mb="2rem">DO YOU WANT TO TRANSFER</Typography>
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
                    <div style={{marginTop: "1rem"}}>
                        <div style={{width: "100%", textAlign: "center"}}>
                            <h5>AVAILABLE DEPARTMENTS TO BE TRANSFERED TO ARE: COMPUTER SCIENCE, LAW, PHYSICS AND CHEMISTRY.</h5>
                        </div>
                        <div className="mainContainer" style={{marginTop: "1rem", display: "flex"}}>
                        <div style={{ marginTop: "1rem", width: "50%", display: "flex", flexDirection: "column", alignItems: "center", height: "60%"}}>
                            <div className="inputDiv" style={{height: "15%", width: "100%", display: "flex", justifyContent: "center"}}>
                                <label className="depLabel" style={{fontSize: "20px", fontWeight: "500", color: "rgb(83, 81, 81)"}}>OLD DEPARTMENT:</label>
                                <Select
                                    className="dep"
                                    value={oldDep}
                                    style={{height: "80%", marginLeft: "2rem", fontSize: "19px", width: "35%"}}
                                    onChange={onInput1Change}
                                    >
                                        {availableDeps1.map((dep, ind) => (
                                            <MenuItem key={ind} value={dep}>{dep}</MenuItem>
                                            ))}
                                </Select>
                                {/* <input className={isInputErrors.input1 ? "errorInput" : ""} value={oldDep} onChange={onInput1Change} style={{height: "80%", marginLeft: "2rem", fontSize: "19px"}}/> */}
                                {isInputErrors.input1 && <p className="errorText">{inputError.input1}</p>}
                            </div>
                            <div className="subjDiv" style={{height: "60%", paddingTop: "2rem", width: "100%", display: "flex", justifyContent: "center"}}>
                                    <label style={{fontSize: "20px", fontWeight: "500", color: "rgb(83, 81, 81)"}}>O/LEVEL SUBJECTS:</label>
                                    <Grid className="inputList" item xs={12} sm={8} marginLeft="2rem" style={{display: "flex", flexDirection: "column", width: "35%"}}>
                                        {olevelFields.map((value, index) => (
                                            <Select
                                            className="dep"
                                            value={value}
                                            key={index}
                                            label="Department"
                                            style={{height: "20%", fontSize: "19px", width: "100%", marginBottom: "1rem"}}
                                            onChange={(event) => handleInputChange(index, event, olevelFields, setOlevelFields, setOlevelSubj)}                                            >
                                                {olevelSubj.map((dep, ind) => (
                                                    <MenuItem key={ind} value={dep}>{dep}</MenuItem>
                                                    ))}
                                            </Select>
                                            ))}
                                    </Grid>
                            </div>
                        </div>
                        <div style={{ marginTop: "1rem", width: "50%", display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <div className="inputDiv" style={{height: "15%", width: "100%", display: "flex", justifyContent: "center"}}>
                                <label className="depLabel" style={{fontSize: "20px", fontWeight: "500", color: "rgb(83, 81, 81)"}}>NEW DEPARTMENT:</label>
                                <Select
                                    className="dep"
                                    value={newDep}
                                    label="Department"
                                    style={{height: "80%", marginLeft: "0.5rem", fontSize: "19px", width: "35%"}}
                                    onChange={onInput2Change}
                                    >
                                        {availableDeps2.map((dep, ind) => (
                                            <MenuItem key={ind} value={dep}>{dep}</MenuItem>
                                            ))}
                                </Select>
                                {/* <input className={isInputErrors.input2 ? "errorInput" : ""} value={newDep} onChange={onInput2Change} style={{height: "80%", marginLeft: "2rem", fontSize: "19px"}}/> */}
                                {isInputErrors.input2 && <p className="errorText">{inputError.input2}</p>}
                            </div>
                            <div className="subjDiv" style={{height: "60%", paddingTop: "2rem", width: "100%", display: "flex", justifyContent: "center"}}>
                                    <label style={{fontSize: "20px", fontWeight: "500", color: "rgb(83, 81, 81)"}}>JAMB SUBJECTS:</label>
                                    <Grid className="inputList" item xs={12} sm={8} marginLeft="2rem" style={{display: "flex", flexDirection: "column", width: "35%"}}>
                                        {jambFields.map((value, index) => (
                                            <Select
                                            className="dep"
                                            value={value}
                                            key={index}
                                            label="Department"
                                            style={{height: "20%", fontSize: "19px", width: "100%", marginBottom: "1rem"}}
                                            onChange={(event) => handleInputChange(index, event, jambFields, setJambFields, setJambSubj)}                                            >
                                                {jambSubj.map((dep, ind) => (
                                                    <MenuItem key={ind} value={dep}>{dep}</MenuItem>
                                                    ))}
                                            </Select>
                                            ))}
                                    </Grid>
                            </div>
                            {/* <div className="subjDiv" style={{height: "60%", paddingTop: "2rem"}}>
                                <label  style={{fontSize: "20px", fontWeight: "500", color: "rgb(83, 81, 81)"}}>JAMB SUBJECTS:</label>
                                <Grid className="inputList" item xs={12} sm={8} marginLeft="4rem">
                                    {jambSubj.map((value, index) => (
                                        <input
                                        key={index}
                                        value={value}
                                        onChange={(event) => handleInputChange(index, event, jambSubj, setJambSubj)}
                                        style={{height: "25%", marginTop: "1rem", display: "block", fontSize: "19px"}}
                                        />
                                        ))}
                                </Grid>
                            </div> */}
                        </div>
                    </div>
                    <div className="buttonDiv" style={{width: "100%", display: "flex", justifyContent: "center", marginBottom: "2rem"}}>
                        <Button 
                            variant="contained"
                            sx={{background: "rgb(105, 101, 101)", height: "36%", width: "20%", ":hover": {
                            background: "rgb(83, 81, 81)"
                            }}}
                            size="large"
                            onClick={submit}
                            >
                            Verify
                        </Button>
                    </div>
                </div>
                )
            }        
        </div>
    )
}

export default Transfer;