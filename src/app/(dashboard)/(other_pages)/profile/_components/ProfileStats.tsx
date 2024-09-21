import { Box, Typography } from '@mui/material'
import React from 'react'

const ProfileStats = () => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between",gap: "10px", flexWrap: "wrap", width: "100%" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "text.primary" }}>
                    947
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary", textTransform: "uppercase" }}>
                    followers
                </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "text.primary" }}>
                    518
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary", textTransform: "uppercase" }}>
                    tweets
                </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "text.primary" }}>
                    87
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary", textTransform: "uppercase" }}>
                    posts
                </Typography>
            </Box>
        </Box>
    )
}

export default ProfileStats