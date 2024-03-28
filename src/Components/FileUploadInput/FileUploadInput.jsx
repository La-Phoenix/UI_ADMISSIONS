import React, { useEffect, useRef } from "react";
import "./FileUploadInput.css"

const FileUploadInput = ({label, addFile, resetFlag, ml, fieldName}) => {
    const fileInputRef = useRef(null);

    
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            addFile(fieldName, file)
        }
    };

    useEffect(() => {
        if (resetFlag){
            fileInputRef.current.value = '';
        }
    }, [resetFlag])

    
    return (
        <div style={{marginBottom: "1.5rem"}}>
            <label style={{marginRight: "4rem", fontSize: "24px", fontWeight: "500", color: "rgb(83, 81, 81)"}}>
                {label}
            </label>
            <input
            style={{marginLeft: ml}} 
            id='fileInput'
            ref={fileInputRef}
            type="file" accept="image/*, .pdf" 
            onChange={handleFileChange}></input>
        </div>
    );
  }

export default FileUploadInput;