import React, {useState} from "react";
import { ToggleBtnChild } from "./ToggleBtnChild";

export const DarkModeToggleParnt = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleToggle = () =>{
        setDarkMode((prevMode)=> !prevMode)
    }
    const themeStyles ={
        backgroundColor: darkMode? "#121212" : "#f5f5f5",
        color: darkMode ? "#ffffff" : "#000000",
        height:"100vh",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center"
    }

    return (
        <div style={themeStyles}>
            <h2>{darkMode ? "Dark Mode" : "Light Mode"}</h2>
            <ToggleBtnChild ToggleTheme={handleToggle} />
        </div>
    )
}

