import React, { createContext, useContext, useEffect, useState } from 'react';
import englishLanguage from '../languages/en.json';
import myanmarLanguage from '../languages/mm.json';
import LanguageAnimation from '../animations/animateIcons/LanguageAnimation';

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');
    const [languageData, setLanguageData] = useState(englishLanguage);
    const [loading, setLoading] = useState(false)

    const changeLanguage = (lang) => {
        setLoading(true)
        setTimeout(() => {
            setLanguage(lang);
            setLoading(false)
        }, 1000);
    };

    useEffect(() => {
        if (language === 'en') {
            setLanguageData(englishLanguage);
        } else if (language === 'mm') {
            setLanguageData(myanmarLanguage);
        }
    }, [language]);

    if(loading) return <div className='w-screen h-screen absolute top-0 left-0 bg-primary-50 flex items-center justify-center'><LanguageAnimation /></div>

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, languageData }}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageProvider;

export const useLanguage = () => {
    return useContext(LanguageContext);
};
