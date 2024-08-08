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
    // Initialize theme state with a safe default (true for dark mode)
    const [isDark, setIsDark] = useState<boolean>(true);

    // Track whether the theme has been initialized to prevent delay/flicker
    const [isInitialized, setIsInitialized] = useState<boolean>(false);

    // Use effect to load the theme mode from localStorage on client-side
    useEffect(() => {
        // Check if the code is running in the browser
        if (typeof window !== 'undefined') {
            const savedMode = window.localStorage.getItem("isDark");
            if (savedMode !== null) {
                setIsDark(savedMode === 'true');
            }
            // Mark initialization as complete
            setIsInitialized(true);
        }
    }, []);

    // Use effect to update localStorage whenever isDark changes
    useEffect(() => {
        if (isInitialized) {
            // Update localStorage only after initial load
            window.localStorage.setItem("isDark", JSON.stringify(isDark));
        }
    }, [isDark, isInitialized]);

    // Render only if the theme has been initialized to prevent flicker
    if (!isInitialized) {
        // You can return a loading state or empty fragment while initializing
        return null; // or <div>Loading...</div>
    }

    return (
        <ThemeContext.Provider value={{ isDark, setIsDark }}>
            <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;
