import React, { useEffect, useState } from 'react'

const DarkToggle = () => {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    const styles = {
        backgroundColor: darkMode ? "#121212" : "#ffffff",
        color: darkMode ? "#f9f9f9" : "#000000"
    }

    useEffect(() => {
        localStorage.setItem("theme", darkMode ? "Dark" : "Lite")
    }, [darkMode]);

    const ToggleTheme = () => {
        setDarkMode((PrevMode) => !PrevMode)
    }


    return (
        <div style={styles}>
            {darkMode ? "Dark Theme" : "Light Theme"}
            <button onClick={ToggleTheme} >Toggle Theme</button>
        </div>
    )
}

export default DarkToggle