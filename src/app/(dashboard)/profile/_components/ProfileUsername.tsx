import { Box, Typography } from '@mui/material'
import React from 'react'

const ProfileUsername = () => {
    return (
        <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "text.primary" }}>
                Peter Griffin
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Web developer
            </Typography>
        </Box>
    )
}

export default ProfileUsername