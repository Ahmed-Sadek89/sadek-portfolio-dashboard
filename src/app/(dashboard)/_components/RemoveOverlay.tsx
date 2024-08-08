"use client"
import { Box, Button, Typography } from '@mui/material'
import { btnsGroupStyle, btnStyle, editOverlayContainer } from '@/global/OverlayStyles';

type props = {
    param: {
        id: number;
        username: string;
        img: string;
        status: string;
        email: string;
        age: number;
    },
    handleClose: () => void
}

const RemoveOverlay = ({ param, handleClose }: props) => {
    const handleSubmit = () => {
        handleClose()
    }

    return (
        <Box sx={{ ...editOverlayContainer, textAlign: "center" }}>
            <Typography variant="h6" component="h2">
                Are you sure that you want delete row number #{param.id} in home?
            </Typography>
            <Box sx={btnsGroupStyle}>
                <Button
                    variant='contained'
                    sx={{ bgcolor: "error.main", ":hover": { bgcolor: "#b02a37" }, ...btnStyle }}
                    onClick={handleSubmit}
                >
                    <Typography variant='body1'>
                        Yes, delete it
                    </Typography>
                </Button>
                <Button
                    type='submit'
                    variant='contained'
                    sx={{ bgcolor: "primary.main", ":hover": { bgcolor: "primary.main" }, ...btnStyle, color: "text.primary" }}
                    onClick={handleClose}
                >
                    <Typography variant='body1'>
                        No
                    </Typography>
                </Button>
            </Box>
        </Box>
    )
}

export default RemoveOverlay