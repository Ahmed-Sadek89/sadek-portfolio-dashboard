"use client"
import { ThemeProvider } from '@mui/material';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { darkTheme, lightTheme } from './CustomTheme';


interface ThemeContextInterface {
    isDark: boolean,
    setIsDark: React.Dispatch<React.SetStateAction<boolean>>
}
const ThemeContext = createContext<ThemeContextInterface | undefined>(undefined)
export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useThemeContext must be used within a ThemeProvider');
    }
    return context;
};
const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [isDark, setIsDark] = useState<boolean>(() => {
        if (typeof window !== "undefined") {
            const savedMode = localStorage.getItem("isDark") as string
            return JSON.parse(savedMode)
        }
    });
    useEffect(() => {
        window.localStorage.setItem("isDark", JSON.stringify(isDark))
    }, [isDark])
    return (
        <ThemeContext.Provider value={{ isDark, setIsDark }}>
            <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider