import React from 'react'
import { useColor } from '../providers/ColorProvider';
import { useLanguage } from '../providers/LanguageProvider';
import ThemeToggle from '../components/ThemeToggle';

const Settings = () => {

    const {theme, changeTheme} = useColor();
    const {changeLanguage} = useLanguage();
  return (
    <div>
      <ThemeToggle />
        <button onClick={() => changeLanguage("en")} className='p-2 flex items-center justify-center .bg-secondary'>EN</button>
        <button onClick={() => changeLanguage("mm")} className='p-2 flex items-center justify-center b.bg-secondary'>MM</button>
    </div>
  )
}

export default Settings