import { btnsGroupStyle, btnStyle } from '@/global/OverlayStyles'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import ButtonSubmit from '../ui/button-submit'
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import CancelIcon from '@mui/icons-material/Cancel';

type props = {
    handleClose: () => void
}

const EditOverlayBtns = ({ handleClose }: props) => {
    return (
        <Box sx={btnsGroupStyle}>
            <ButtonSubmit
                btnStyle={{ bgcolor: "info.main", ":hover": { bgcolor: "#0dcaf0" }, ...btnStyle }}
            >
                <AddCardOutlinedIcon />
                <Typography variant="body1">
                    Edit this Row
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

export default EditOverlayBtns
