import { Box, Typography } from '@mui/material'
import React from 'react'

const ProfileBio = () => {
    return (
        <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "text.primary" }}>
                Bio
            </Typography>
            <Typography sx={{ color: "text.secondary", fontSize: { xs: "16px", lg: "11px" }, lineHeight: "1.3" }}>
                pleasure rationally encounter but because pursue consequences
                that are extremely painful.occur in which toil and pain can
                procure him some great pleasure..
            </Typography>
        </Box>
    )
}

export default ProfileBio