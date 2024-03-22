import { Button, FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import React, { useRef, useState } from "react";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const FileUploadInput = ({fieldName}) => {
    const [fileName, setFileName] = useState("");
    const fileInputRef = useRef(null);
    
    const handleFileChange = (event) => {
        console.log(event)
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
        }
    };
    
    const handleClick = (event) => {
        console.log(event)
        fileInputRef.current.click();
    };
    
    return (
        <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="file-upload">Upload</InputLabel>
            <Input
                id="file-upload"
                type="text"
                value={fileName}
                readOnly
                endAdornment={
                    <Button
                        startIcon={<CloudUploadIcon />}
                        onClick={handleClick} >
                            Browse
                        </Button>
                }/>
                <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: 'none', borderRadius: "4px 0 0 4px" }}
            />
            <FormHelperText>{fieldName}</FormHelperText>
        </FormControl>
    );
  }

export default FileUploadInput;