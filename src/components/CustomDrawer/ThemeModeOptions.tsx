"use client"
import { Box, Typography } from '@mui/material'
import { themeColor, themeColorsContainer } from './style'

const ThemeModeOptions = () => {
    return (
        <Box sx={{
            padding: "10px"
        }}>
            <Typography color='text.primary' fontWeight={"bold"}>Theme: </Typography>
            <Box sx={themeColorsContainer}>
                <Box sx={{ ...themeColor, background: "#242b39" }} />
                <Box sx={{ ...themeColor, background: "#f2edf3" }} />
            </Box>
        </Box>
    )
}

export default ThemeModeOptions