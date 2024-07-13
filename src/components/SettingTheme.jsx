import React, { useEffect, useState } from 'react';
import { useColor } from '../providers/ColorProvider';

const SettingTheme = () => {

    const { changeTheme } = useColor();
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "pink");

    useEffect(() => {
        changeTheme(theme);
    }, [theme, changeTheme]); // Include changeTheme in dependency array

    const handleThemeChange = (color) => {
        setTheme(color); // Update theme based on selection
    };

  return (
    <div className="themes flex gap-6">
        <div className="pink flex gap-2 cursor-pointer" onClick={() => handleThemeChange("pink")}>
            <div className="pinkColor bg-[#e58799] w-7 h-7"></div>
            <span className='italic'>Pink</span>
        </div>
        <div className="mantis flex gap-2 cursor-pointer" onClick={() => handleThemeChange("mantis")}>
            <div className="mantisColor bg-[#82bd69] w-7 h-7"></div>
            <span className='italic'>Mantis</span>
        </div>
    </div>
  )
}

export default SettingTheme