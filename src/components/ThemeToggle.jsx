import React, { useEffect, useState } from 'react';
import { useColor } from '../providers/ColorProvider';

const ThemeToggle = () => {
    const { changeTheme } = useColor();
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "pink"); // Correct usage of useState

    useEffect(() => {
        changeTheme(theme);
    }, [theme, changeTheme]); // Include changeTheme in dependency array

    const handleThemeChange = (e) => {
        setTheme(e.target.value); // Update theme based on selection
    };

    return (
        <div className="toggleTheme absolute top-5 right-5">
            <select
                className='p-3 bg-colorbg-secondary border-btnbg-primary text-colortext-primary'
                value={theme} // Set the current theme as selected value
                onChange={handleThemeChange} // Handle theme change
            >
                <option value="pink">Pink</option>
                <option value="mantis">Mantis</option>
            </select>
        </div>
    );
};

export default ThemeToggle;
