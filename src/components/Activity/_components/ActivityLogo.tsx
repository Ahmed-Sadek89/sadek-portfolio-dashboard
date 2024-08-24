import React from 'react'
import LoginIcon from '@mui/icons-material/Login';
import { Box } from '@mui/material';
import { ACTION } from '@/enums';
import PostAddIcon from '@mui/icons-material/PostAdd';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import LogoutIcon from '@mui/icons-material/Logout';

const ActivityLogo = ({ action }: { action: ACTION }) => {
    const sx = { padding: "5px", display: 'flex', alignItems: "center" }
    return (
        <>
            {
                action.toString() === "LOGIN" &&
                <Box sx={{ bgcolor: 'warning.main', color: "#fff", ...sx }} >
                    <LoginIcon />
                </Box>
            }
            {
                action.toString() === "CREATE" &&
                <Box sx={{ bgcolor: 'success.main', color: "#fff", ...sx }} >
                    <PostAddIcon />
                </Box>
            }
            {
                action.toString() === "UPDATE" &&
                <Box sx={{ bgcolor: 'info.main', color: "#fff", ...sx }} >
                    <EditNoteIcon />
                </Box>
            }
            {
                action.toString() === "DELETE" &&
                <Box sx={{ bgcolor: 'error.main', color: "#fff", ...sx }} >
                    <DeleteForeverIcon />
                </Box>
            }
        </>
    )
}

export default ActivityLogo
