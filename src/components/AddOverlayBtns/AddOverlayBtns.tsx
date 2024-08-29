import { btnsGroupStyle, btnStyle } from '@/global/OverlayStyles'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import ButtonSubmit from '../ui/button-submit'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import CancelIcon from '@mui/icons-material/Cancel';

type props = {
    modelName: string,
    handleClose: () => void
}

const AddOverlayBtns = ({ modelName, handleClose }: props) => {
    return (
        <Box sx={btnsGroupStyle}>
            <ButtonSubmit
                btnStyle={{ bgcolor: "success.main", ":hover": { bgcolor: "#00d25b" }, ...btnStyle }}
            >
                <PlaylistAddIcon />
                <Typography variant='body1'>
                    Add a new {modelName}
                </Typography>
            </ButtonSubmit>
            <Button
                type="button"
                variant="contained"
                sx={{ bgcolor: "error.main", ":hover": { bgcolor: "#b02a37" }, ...btnStyle }}
                onClick={handleClose}
            >
                <CancelIcon />
                <Typography variant="body1">
                    Cancel
                </Typography>
            </Button>
        </Box>
    )
}

export default AddOverlayBtns
