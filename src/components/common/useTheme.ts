import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

/**
 * Custom hook for accessing the theme context
 * 
 * This hook:
 * 1. Provides access to the current theme state
 * 2. Provides the theme toggle function
 * 3. Throws an error if used outside of ThemeProvider
 * 
 * @returns {ThemeContextType} The theme context value
 * @throws {Error} If used outside of ThemeProvider
 * 
 * @example
 * ```tsx
 * const { theme, toggleTheme } = useTheme();
 * ```
 */
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}; 