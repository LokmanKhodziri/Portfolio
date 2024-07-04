import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContect = createContext();

export const useTheme = () => useContext(ThemeContect);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(
        () => localStorage.getItem('theme') || 'light'
    );

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContect.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContect.Provider>
    )
};