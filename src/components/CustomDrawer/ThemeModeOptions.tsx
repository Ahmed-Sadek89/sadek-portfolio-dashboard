"use client"
import { Box, Typography } from '@mui/material'
import { themeColor, themeColorsContainer } from './style'
import { useThemeContext } from '@/context/ThemeContext'

const ThemeModeOptions = () => {
    const {setIsDark} = useThemeContext()

    return (
        <Box sx={{
            padding: "10px"
        }}>
            <Typography color='text.primary' fontWeight={"bold"}>Theme: </Typography>
            <Box sx={themeColorsContainer}>
                <Box sx={{ ...themeColor, background: "#242b39" }} onClick={() => setIsDark(true)} />
                <Box sx={{ ...themeColor, background: "#f2edf3" }} onClick={() => setIsDark(false)} />
            </Box>
        </Box>
    )
}

export default ThemeModeOptions