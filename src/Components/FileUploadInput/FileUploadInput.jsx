import { Button, FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import "./FileUploadInput.css"

const FileUploadInput = ({label, addFile, resetFlag, ml }) => {
    // const [fileName, setFileName] = useState("");
    // const fileInputRef = useRef(null);
    
    // const handleFileChange = (event) => {
    //     const file = event.target.files[0];
    //     if (file) {
    //         setFileName(file.name);
    //         addFile(fieldName,file)
    //     }
    // };

    // useEffect(() => {
    //     if (fileInputRef.current){
    //         fileInputRef.current.value = ""
    //         setFileName("")
    //     }
    // }, [resetFlag])
    
    // const handleClick = () => {
    //     fileInputRef.current.click();
    // };
    
    return (
        <div style={{marginBottom: "1.5rem"}}>
            <label style={{marginRight: "4rem", fontSize: "24px", fontWeight: "500", color: "rgb(83, 81, 81)"}}>
                {label}
            </label>
            <input style={{marginLeft: ml}} type="file" accept="image/*"></input>
        </div>
    );
  }

export default FileUploadInput;