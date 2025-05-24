import React, { createContext, useEffect, useState, ReactNode } from "react";

/**
 * Interface for the theme context value
 * @interface ThemeContextType
 */
interface ThemeContextType {
    /** Current theme ('light' or 'dark') */
    theme: string;
    /** Function to toggle between light and dark themes */
    toggleTheme: () => void;
}

/**
 * Props interface for the ThemeProvider component
 * @interface ThemeProviderProps
 */
interface ThemeProviderProps {
    /** Child components to be wrapped by the theme provider */
    children: ReactNode;
}

/**
 * Theme Context
 * Creates a context for managing the application's theme state
 */
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Theme Provider Component
 * 
 * This component:
 * 1. Manages the theme state (light/dark)
 * 2. Persists theme preference in localStorage
 * 3. Applies theme to the document body
 * 4. Provides theme context to all child components
 * 
 * @param {ThemeProviderProps} props - Component props
 * @returns {JSX.Element} Theme provider wrapper
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    // Initialize theme from localStorage or default to 'light'
    const [theme, setTheme] = useState<string>(
        () => localStorage.getItem('theme') || 'light'
    );

    // Update theme in localStorage and apply to body when theme changes
    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Toggle between light and dark themes
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}; 