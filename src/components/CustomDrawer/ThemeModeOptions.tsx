"use client"
import { Box, Typography } from '@mui/material'
import { themeColor, themeColorsContainer } from './style'
import { useTheme } from 'next-themes'

const ThemeModeOptions = () => {
    const { setTheme } = useTheme()

    return (
        <Box sx={{
            padding: "10px"
        }}>
            <Typography color='text.primary' fontWeight={"bold"}>Theme: </Typography>
            <Box sx={themeColorsContainer}>
                <Box sx={{ ...themeColor, background: "#242b39" }} onClick={() => setTheme("dark")} />
                <Box sx={{ ...themeColor, background: "#f2edf3" }} onClick={() => setTheme("light")} />
            </Box>
        </Box>
    )
}

export default ThemeModeOptions