"use client"
import React from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useThemeContext } from '@/context/ThemeContext';

const ThemeOption = () => {
    const { isDark, setIsDark } = useThemeContext()
    return (
        <>
            {
                isDark ?
                    <LightModeIcon
                        sx={{ cursor: "pointer" }}
                        onClick={() => setIsDark(prev => !prev)}
                    /> :
                    <DarkModeIcon
                        sx={{ cursor: "pointer" }}
                        onClick={() => setIsDark(prev => !prev)}
                    />
            }
        </>
    )
}

export default ThemeOption
