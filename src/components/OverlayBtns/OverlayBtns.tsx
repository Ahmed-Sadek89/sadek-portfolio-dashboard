import { btnStyle } from '@/global/OverlayStyles'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import ButtonSubmit from '../ui/button-submit'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import CancelIcon from '@mui/icons-material/Cancel';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';

type props = {
    action: "Add" | "Edit"
    modelName?: string,
    handleClose: () => void
}

const OverlayBtns = ({ action, modelName, handleClose }: props) => {
    return (
        <Box className="flex gap-[10px] items-center justify-between w-full" >
            <ButtonSubmit
                btnStyle={{ bgcolor: action === "Add" ? "success.main" : "info.main", ":hover": { bgcolor: action === "Add" ? "#00d25b" : "#0dcaf0", }, ...btnStyle }}
            >
                {
                    action === "Add" &&
                    <>
                        <PlaylistAddIcon />
                        <Typography variant='body1'>
                            Add a new {modelName}
                        </Typography>
                    </>
                }
                {
                    action === "Edit" &&
                    <>
                        <AddCardOutlinedIcon />
                        <Typography variant="body1">
                            Edit this Row
                        </Typography>
                    </>
                }
            </ButtonSubmit>
            <Button
                type="button"
                variant="contained"
                sx={{ bgcolor: "error.main", height: "40px", ":hover": { bgcolor: "#b02a37" }, ...btnStyle }}
                onClick={handleClose}
            >
                <CancelIcon />
                <Typography variant="body1">
                    Cancel
                </Typography>
            </Button>
        </Box >
    )
}

export default OverlayBtns
