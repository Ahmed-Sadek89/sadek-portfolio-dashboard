"use client"

import { ThemeProvider } from '@mui/material';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { darkTheme, lightTheme } from './CustomTheme';

// Define the ThemeContext interface
interface ThemeContextInterface {
    isDark: boolean;
    setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create a ThemeContext
const ThemeContext = createContext<ThemeContextInterface | undefined>(undefined);

// Custom hook to use the ThemeContext
export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useThemeContext must be used within a ThemeProvider');
    }
    return context;
};

// ThemeContextProvider component
const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
    // State for managing the theme mode
    const [isDark, setIsDark] = useState<boolean>(true);

    // Use effect to load the theme mode from localStorage on mount
    useEffect(() => {
        const savedMode = localStorage.getItem("isDark");
        if (savedMode !== null) {
            setIsDark(JSON.parse(savedMode));
        }
    }, []);

    // Use effect to update localStorage whenever isDark changes
    useEffect(() => {
        localStorage.setItem("isDark", JSON.stringify(isDark));
    }, [isDark]);

    return (
        <ThemeContext.Provider value={{ isDark, setIsDark }}>
            <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;
